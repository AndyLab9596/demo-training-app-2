import { Form, Input, Button, Checkbox, Menu } from 'antd';
import './LoginPage.scss';
import React, { Fragment } from 'react';
import { Header } from 'antd/lib/layout/layout';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const linkToReduxSagaPage = () => {
    history.push('/adminSaga/product');
  };

  const linkToReduxThunkPage = () => {
    history.push('/adminThunk/product');
  };

  return (
    <Fragment>
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" onClick={() => linkToReduxSagaPage()}>
            Link to CRUD page using Redux Saga (Finished){' '}
          </Menu.Item>
          <Menu.Item key="2" onClick={() => linkToReduxThunkPage()}>
            Link to CRUD page using Redux Thunk (Unfinished){' '}
          </Menu.Item>
        </Menu>
      </Header>
      <div className="wrapper">
        <div className="container">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" shape="round" size="middle" block={true}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
