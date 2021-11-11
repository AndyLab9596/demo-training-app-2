import { PieChartOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { Layout, Menu } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchThunkProductList,
  productThunkFilter,
  productThunkList,
} from "../../../features/productThunk/productThunkSlice";
import "./AdminAntd.scss";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminAntd = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(productThunkFilter);
  const productList = useAppSelector(productThunkList);

  console.log("productList", productList);
  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchThunkProductList(filter));
        const result = unwrapResult(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter, dispatch]);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Product List
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}></Content>
        <Footer style={{ textAlign: "center" }}>HD Web training program</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminAntd;
