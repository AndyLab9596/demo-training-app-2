import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { Popconfirm, Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import productApi from "../../../../api/productApi";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Product } from "../../../../models";
import {
  fetchThunkProductList,
  productThunkFilter,
  productThunkList,
} from "../../productThunkSlice";
import "./ProductListPage.scss";

const ProductListPage = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(productThunkList);

  console.log("productList", productList);
  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetchThunkProductList());
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const handleRemoveProduct = async (productId: string) => {
    try {
      await productApi.removeProduct(productId);
      dispatch(fetchThunkProductList());
    } catch (error) {
      console.log(error);
    }
  };

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
      ellipsis: true,
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
    {
      title: "Edit",
      dataIndex: "id",
      render: (text: string, product: Product) => {
        return (
          <Fragment>
            <NavLink key={1} to={`/adminThunk/product/${product.id}`}>
              <EditOutlined className="icon__edit" />
            </NavLink>
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => {
                handleRemoveProduct(product.id);
              }}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <span>
                <DeleteOutlined className="icon__delete" />
              </span>
            </Popconfirm>
          </Fragment>
        );
      },
    },
  ];

  const data = productList;

  return (
    <div className="container">
      <Table columns={columns} dataSource={data} rowKey={"id"} />
    </div>
  );
};

export default ProductListPage;
