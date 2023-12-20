// Library
import { FormEvent, Suspense, useContext, useState, useRef, ChangeEvent } from 'react';

// Context
import { ToastContext } from 'context/toast';

// Constant
import {
  defaultData,
  defaultErrorMessage,
  PRODUCT_MESSAGE,
  MODAL_TITLE,
  DEFAULT_PAGINATION
} from '@constants/index';

// Types
import { Product } from 'types';

// helper
import { validateForm } from 'helpers';

// hooks
import useProduct from 'hooks/useProduct';
import { ToastType } from 'hooks/useToast';

// Component
import {
  AddCard,
  Button,
  ConfirmModal,
  Header,
  Modal,
  ProductCard,
  ProductModal,
  Spinner
} from '../components';

// Css
import './main-page.css';

const MainPage = () => {
  // useProduct
  const {
    productList,
    isLastPage,
    isQuery,
    handleUpdateProduct,
    handleDeleteProduct,
    handleGetShowMore,
    handleAddProduct,
    setIsQuery
  } = useProduct();

  // useContext
  const { showToast } = useContext(ToastContext);

  // useState
  const [isModal, setIsModal] = useState({
    modalTitle: '',
    modalError: defaultErrorMessage,
    modalProduct: false,
    modalConfirm: false,
    modalProductList: defaultData
  });
  const [isLoading, setIsLoading] = useState(false);
  const [getIdConfirmModal, setGetIdConfirmModal] = useState('');

  const pageRef = useRef(DEFAULT_PAGINATION);

  // handle add product
  const handleCreateProduct = async (product: Product): Promise<void> => {
    try {
      setIsLoading(true);
      await handleAddProduct(product);
      handleCancelModal();
      showToast(PRODUCT_MESSAGE.ADD_SUCCESS, ToastType.SUCCESS);
    } catch {
      showToast(PRODUCT_MESSAGE.ADD_FAILED, ToastType.SUCCESS);
    }
    setIsLoading(false);
  };

  // Handle Edit Product
  const handleEditProduct = async (product: Product): Promise<void> => {
    try {
      setIsLoading(true);
      await handleUpdateProduct(product);
      handleCancelModal();
      showToast(PRODUCT_MESSAGE.EDIT_SUCCESS, ToastType.SUCCESS);
    } catch {
      showToast(PRODUCT_MESSAGE.EDIT_FAILED, ToastType.SUCCESS);
    }
    setIsLoading(false);
  };

  // Handle delete product
  const deleteProduct = async (id: string) => {
    try {
      setIsLoading(true);
      await handleDeleteProduct(id);
      setIsModal((prevModal) => ({ ...prevModal, modalConfirm: false }));
      showToast(PRODUCT_MESSAGE.REMOVE_SUCCESS, ToastType.SUCCESS);
    } catch {
      setIsModal((prevModal) => ({ ...prevModal, modalConfirm: false }));
      showToast(PRODUCT_MESSAGE.REMOVE_ERROR, ToastType.ERROR);
    }
    setIsLoading(false);
  };

  // submit modal form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateMessage = validateForm(isModal.modalProductList);

    if (Object.values(validateMessage).join('')) {
      setIsModal((prevModal) => ({ ...prevModal, modalError: validateMessage }));
    } else {
      if (isModal.modalProductList.id === '') {
        handleCreateProduct(isModal.modalProductList);
      } else {
        handleEditProduct(isModal.modalProductList);
      }
    }
  };

  // submit confirm
  const handleConfirm = () => {
    deleteProduct(getIdConfirmModal);
  };

  // Cancel modal
  const handleCancelModal = () => {
    setIsModal((prevModal) => ({
      ...prevModal,
      modalProduct: false,
      modalError: defaultErrorMessage,
      modalProductList: defaultData
    }));
  };

  // Cancel modal confirm
  const handleCancelConfirmModal = () => {
    setIsModal((prevModal) => ({ ...prevModal, modalConfirm: false }));
  };

  // handle click delete product
  const handleClickDelete = (id: string) => {
    setIsModal((prevModal) => ({ ...prevModal, modalConfirm: true }));
    setGetIdConfirmModal(id);
  };

  // Handle click add product
  const handleClickAdd = () => {
    setIsModal((prevModal) => ({
      ...prevModal,
      modalProduct: true,
      modalTitle: MODAL_TITLE.ADD,
      modalProductList: isModal.modalProductList
    }));
  };

  // Handle click edit product
  const handleClickEditProduct = (product: Product) => {
    setIsModal((prevModal) => ({
      ...prevModal,
      modalProduct: true,
      modalTitle: MODAL_TITLE.EDIT,
      modalProductList: product
    }));
  };

  // Handle click show more
  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        handleGetShowMore((pageRef.current += 1));
      } catch {
        showToast(PRODUCT_MESSAGE.GET_ERROR, ToastType.ERROR);
      }
      setIsLoading(false);
    }, 1000);
  };

  // handle search value
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsQuery(prevQuery => ({ ...prevQuery, queryName: e.target.value }));
      setIsLoading(false);
    }, 1000);
  };

  // handle sort value
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    setTimeout(() => {
      setIsQuery(prevQuery => ({ ...prevQuery, querySelect: value }));
      setIsLoading(false);
    }, 1000);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setIsModal((prevModal) => ({
      ...prevModal,
      modalProductList: { ...isModal.modalProductList, [e.target.name]: value }
    }));
  };

  return (
    <>
      <Header
        handleChangeSort={handleChangeSort}
        handleChangeSearch={handleChangeSearch}
        sortValue={isQuery.querySelect}
      />
      <main className="main-content">
        <section className="section-manage">
          <div className="manage-list">
            {isLoading && <Spinner />}

            <AddCard onClick={handleClickAdd} />

            {productList?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={handleClickDelete}
                onEdit={handleClickEditProduct}
              />
            ))}

            {!isLoading && productList?.length === 0 && (
              <div className="empty-message">{PRODUCT_MESSAGE.EMPTY_MESSAGE}</div>
            )}
          </div>
          {isLastPage && (
            <Button
              classButton="btn btn-expand"
              type="button"
              isDisabled={isLoading}
              onClick={handleShowMore}
              children="SHOW MORE"
            />
          )}
        </section>
      </main>

      {isModal.modalConfirm && (
        <Suspense fallback={<Spinner />}>
          <Modal classTitle="confirm-title" title="Are you sure you want to delete this food?">
            <ConfirmModal handleCancel={handleCancelConfirmModal} handleConfirm={handleConfirm} />
          </Modal>
        </Suspense>
      )}

      {isModal.modalProduct && (
        <Suspense fallback={<Spinner />}>
          <Modal title={isModal.modalTitle}>
            <ProductModal
              product={isModal.modalProductList}
              errorProductMessage={isModal.modalError}
              onchange={handleChangeInput}
              onSubmit={handleSubmit}
              onCancelClick={handleCancelModal}
            />
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default MainPage;
