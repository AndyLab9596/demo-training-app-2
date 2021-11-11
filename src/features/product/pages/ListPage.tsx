/* eslint-disable no-restricted-globals */
import { Box, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  productActions,
  selectProductFilter,
  selectProductList,
  selectProductPagination,
} from "../productSlice";
import { useHistory, useRouteMatch } from "react-router";
import ProductTable from "../components/ProductTable";
import { ListParams, Product } from "../../../models";
import { Pagination } from "@material-ui/lab";
import ProductSearch from "../components/ProductSearch";
import productApi from "../../../api/productApi";

const ListPage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectProductFilter);
  const productList = useAppSelector(selectProductList);
  const { _page, _limit, _totalRows } = useAppSelector(selectProductPagination);
  console.log("productList", productList);

  useEffect(() => {
    dispatch(productActions.fetchProductList(filter));
  }, [dispatch, filter]);

  const handleEditProduct = (product: Product) => {
    history.push(`${match.url}/${product.id}`);
  };

  const handleRemoveProduct = async (product: Product) => {
    const productId = product.id;
    try {
      await productApi.removeProduct(productId);
      dispatch(productActions.fetchProductList({ ...filter }));
    } catch (error) {
      dispatch(productActions.fetchProductListFailed("error.message"));
    }
  };

  const handleChangePaginate = (event: any, page: number) => {
    dispatch(productActions.setFilter({ ...filter, _page: page }));
  };

  const handleSearchDebounce = (newFilter: ListParams) => {
    console.log(newFilter);
    dispatch(productActions.searchDebounce(newFilter));
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Products</Typography>
        <Link to={`${match.url}/add`} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Add Product
          </Button>
        </Link>
      </Box>

      <Box mb={3}>
        <ProductSearch filter={filter} onSearchChange={handleSearchDebounce} />
      </Box>

      {/* Product table */}
      <ProductTable
        productList={productList}
        onEdit={handleEditProduct}
        onRemove={handleRemoveProduct}
      />
      {/* Pagination */}
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(_totalRows / _limit)}
          page={_page}
          onChange={handleChangePaginate}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ListPage;
