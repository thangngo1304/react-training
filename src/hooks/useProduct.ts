import { useEffect, useState } from 'react';
import { Product } from 'types';
import { queryParams } from 'helpers/buildQueryString';
import { addProduct, deleteProductId, getProduct, updateProduct } from 'service/product';
import { DEFAULT_LIMITATION, DEFAULT_PAGINATION, FILTER_ATTRIBUTE, ORDER_DESC } from '@constants/index';

export type QueryPramsType = {
  page: number;
  limit: number;
  sortBy: string;
  order: string;
  name: string;
};

const useProduct = () => {
  const [query, setQuery] = useState({ queryName: '', querySelect: FILTER_ATTRIBUTE.DEFAULT, queryPage: DEFAULT_PAGINATION })
  const [isLastPage, setIsLastPage] = useState(Boolean);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProductList(queryParam);
  }, [query]);

  const queryParam = {
    page: query.queryPage,
    limit: DEFAULT_LIMITATION,
    sortBy: query.querySelect,
    order: ORDER_DESC,
    name: query.queryName
  };

  // Get product
  const getProductList = async (queryParam: QueryPramsType) => {
    const path = queryParams(queryParam);
    const result = await getProduct(path);
    setProductList(result);

    if (result.length < 9) {
      setIsLastPage(false);
    } else {
      setIsLastPage(true);
    }
    return result;
  };

  // handle Show more
  const handleGetShowMore = async (page: number) => {
    queryParam.page = page;

    const products = await getProductList(queryParam);
    setProductList(productList.concat(products));
  };

  const handleAddProduct = async (data: Product) => {
    await addProduct(data);
    await getProductList(queryParam);
  };

  const handleUpdateProduct = async (data: Product) => {
    await updateProduct(data);
    await getProductList(queryParam);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProductId(id);
    await getProductList(queryParam);
  };

  return {
    productList,
    handleUpdateProduct,
    handleDeleteProduct,
    handleGetShowMore,
    handleAddProduct,
    setProductList,
    getProductList,
    setQuery,
    queryParam,
    isLastPage,
    query,
  };
};

export default useProduct;
