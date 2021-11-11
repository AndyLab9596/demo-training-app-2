import { Box } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router";

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
