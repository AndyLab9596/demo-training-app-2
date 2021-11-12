import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import AddEditProductListPage from "./components/AddEditProductPage";
import ProductListPage from "./components/ProductListPage";

const ProductThunkFeature = () => {
  return (
    <Box>
      <Switch>
        <Route path="/adminThunk/product/" exact>
          <ProductListPage />
        </Route>
        <Route path={`/adminThunk/product/add`}>
          <AddEditProductListPage />
        </Route>
        <Route path={`/adminThunk/product/:productId`}>
          <AddEditProductListPage />
        </Route>
      </Switch>
    </Box>
  );
};

export default ProductThunkFeature;
