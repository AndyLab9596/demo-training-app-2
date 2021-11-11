import { Box, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  productActions,
  selectProductFilter,
  selectProductList,
} from "../productSlice";
import { useHistory, useRouteMatch } from "react-router";
import ProductTable from "../components/ProductTable";
import { Product } from "../../../models";

const ListPage = () => {
  const match = useRouteMatch();
  const histroy = useHistory();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectProductFilter);
  const productList = useAppSelector(selectProductList);
  console.log("productList", productList);

  useEffect(() => {
    dispatch(productActions.fetchProductList(filter));
  }, [dispatch, filter]);

  const handleEditProduct = (product: Product) => {
    console.log("edit product", product);
  };

  const handleRemoveProduct = (product: Product) => {
    console.log("remove product", product);
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

      {/* <Box mb={3}>
        <StudentSearch filter={filter} onSearchChange={handleSearchChange} />
      </Box> */}

      {/* Product table */}
      <ProductTable
        productList={productList}
        onEdit={handleEditProduct}
        onRemove={handleRemoveProduct}
      />
      {/* Pagination */}
      {/* <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(_totalRows / _limit)}
          page={_page}
          onChange={handleChange}
          color="primary"
        />
      </Box> */}
    </Box>
  );
};

export default ListPage;
