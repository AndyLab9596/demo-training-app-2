import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useEffect, useState } from "react-router/node_modules/@types/react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ListResponse, Product } from "../../../models";
import {
  fetchThunkProductList,
  productThunkFilter,
} from "../productThunkSlice";

const ListThunkPage = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(productThunkFilter);

  const [productList, setProductList] = useState<ListResponse<Product>>();
  console.log("productList", productList);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchThunkProductList(filter));
        const result = unwrapResult(response);
        setProductList(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter, dispatch]);
  return <div>ListThunkPage</div>;
};

export default ListThunkPage;
