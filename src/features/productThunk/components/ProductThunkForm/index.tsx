import React from 'react';
import { Product } from '../../../../models';
import { Form, Button, Input } from 'antd';

export interface ProductThunkFormProps {
  initialValues: Product;
  onSubmit: (formValues: Product) => void;
}

const ProductThunkForm = ({ initialValues, onSubmit }: ProductThunkFormProps) => {
  return (
    <div>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
        <Form.Item label="Input">
          <Input />
        </Form.Item>

        <Form.Item label="Button">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductThunkForm;
