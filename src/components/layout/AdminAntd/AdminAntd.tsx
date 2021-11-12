import { PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Route, Switch, useParams } from "react-router";
import ProductThunkFeature from "../../../features/productThunk";
import ProductListPage from "../../../features/productThunk/components/ProductListPage/index";
import "./AdminAntd.scss";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminAntd = () => {
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
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Route path="/adminThunk/product/">
              {/* <ProductListPage /> */}
              <ProductThunkFeature />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>HD Web training program</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminAntd;
