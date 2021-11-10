import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AddEditPage from "./pages/AddEditPage";
import ListPage from "./pages/ListPage";

const ProductFeature = () => {
  const match = useRouteMatch();

  return (
    <Box>
      <Switch>
        <Route path={match.path} exact>
          <ListPage />
        </Route>
        <Route path={`${match.path}/add`}>
          <AddEditPage />
        </Route>
        <Route path={`${match.path}/:productId`}>
          <AddEditPage />
        </Route>
      </Switch>
    </Box>
  );
};

export default ProductFeature;
