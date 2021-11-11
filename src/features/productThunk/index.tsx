import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AddEditThunkPage from "./pages/AddEditThunkPage";
import ListThunkPage from "./pages/ListThunkPage";

const ProductThunkFeature = () => {
  const match = useRouteMatch();

  return (
    <Box>
      {/* <Switch>
        <Route path={"/adminThunk/product"} exact>
          <ListThunkPage />
        </Route>
        <Route path={`/adminThunk/product/add`}>
          <AddEditThunkPage />
        </Route>
        <Route path={`/adminThunk/product/:productId`}>
          <AddEditThunkPage />
        </Route>
      </Switch> */}
    </Box>
  );
};

export default ProductThunkFeature;
