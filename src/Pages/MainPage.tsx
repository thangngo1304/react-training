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
  ModalForm,
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
    query,
    handleUpdateProduct,
    handleDeleteProduct,
    handleGetShowMore,
    handleAddProduct,
    setQuery
  } = useProduct();

  // useContext
  const { showToast } = useContext(ToastContext);

  // useState
  // Name: Modal
  const [Modal, setModal] = useState({
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
    setIsLoading(true);
    await handleAddProduct(product);
    handleCancelModal();
    showToast(PRODUCT_MESSAGE.ADD_SUCCESS, ToastType.SUCCESS);
    setIsLoading(false);
  };

  // Handle Edit Product
  const handleEditProduct = async (product: Product): Promise<void> => {
    setIsLoading(true);
    await handleUpdateProduct(product);
    handleCancelModal();
    showToast(PRODUCT_MESSAGE.EDIT_SUCCESS, ToastType.SUCCESS);
    setIsLoading(false);
  };

  // Handle delete product
  const deleteProduct = async (id: string) => {
    setIsLoading(true);
    await handleDeleteProduct(id);
    setModal((prevModal) => ({ ...prevModal, modalConfirm: false }));
    showToast(PRODUCT_MESSAGE.REMOVE_SUCCESS, ToastType.SUCCESS);
    setIsLoading(false);
  };

  // submit modal form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateMessage = validateForm(Modal.modalProductList);

    if (Object.values(validateMessage).join('')) {
      setModal((prevModal) => ({ ...prevModal, modalError: validateMessage }));
    } else {
      if (Modal.modalProductList.id === '') {
        handleCreateProduct(Modal.modalProductList);
      } else {
        handleEditProduct(Modal.modalProductList);
      }
    }
  };

  // submit confirm
  const handleConfirm = () => {
    deleteProduct(getIdConfirmModal);
  };

  // Cancel modal
  const handleCancelModal = () => {
    setModal((prevModal) => ({
      ...prevModal,
      modalProduct: false,
      modalError: defaultErrorMessage,
      modalProductList: defaultData
    }));
  };

  // Cancel modal confirm
  const handleCancelConfirmModal = () => {
    setModal((prevModal) => ({ ...prevModal, modalConfirm: false }));
  };

  // handle click delete product
  const handleClickDelete = (id: string) => {
    setModal((prevModal) => ({ ...prevModal, modalConfirm: true }));
    setGetIdConfirmModal(id);
  };

  // Handle click add product
  const handleClickAdd = () => {
    setModal((prevModal) => ({
      ...prevModal,
      modalProduct: true,
      modalTitle: MODAL_TITLE.ADD,
      modalProductList: Modal.modalProductList
    }));
  };

  // Handle click edit product
  const handleClickEditProduct = (product: Product) => {
    setModal((prevModal) => ({
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
      setQuery(prevQuery => ({ ...prevQuery, queryName: e.target.value }));
      setIsLoading(false);
    }, 1000);
  };

  // handle sort value
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    setTimeout(() => {
      setQuery(prevQuery => ({ ...prevQuery, querySelect: value }));
      setIsLoading(false);
    }, 1000);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setModal((prevModal) => ({
      ...prevModal,
      modalProductList: { ...Modal.modalProductList, [e.target.name]: value }
    }));
  };

  return (
    <>
      <Header
        handleChangeSort={handleChangeSort}
        handleChangeSearch={handleChangeSearch}
        sortValue={query.querySelect}
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

      {Modal.modalConfirm && (
        <Suspense fallback={<Spinner />}>
          <ModalForm classTitle="confirm-title" title="Are you sure you want to delete this food?">
            <ConfirmModal handleCancel={handleCancelConfirmModal} handleConfirm={handleConfirm} />
          </ModalForm>
        </Suspense>
      )}

      {Modal.modalProduct && (
        <Suspense fallback={<Spinner />}>
          <ModalForm title={Modal.modalTitle}>
            <ProductModal
              product={Modal.modalProductList}
              errorProductMessage={Modal.modalError}
              onchange={handleChangeInput}
              onSubmit={handleSubmit}
              onCancelClick={handleCancelModal}
            />
          </ModalForm>
        </Suspense>
      )}
    </>
  );
};

export default MainPage;
