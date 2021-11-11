import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";

import { Table, Tag, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  fetchThunkProductList,
  productThunkFilter,
  productThunkList,
} from "../../productThunkSlice";

const ProductListPage = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(productThunkFilter);
  const productList = useAppSelector(productThunkList);

  //   const data = productList;

  console.log("productList", productList);
  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchThunkProductList());
        const result = unwrapResult(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter, dispatch]);

  const columns = [
    {
      title: "Product Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const data = productList;

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ProductListPage;
