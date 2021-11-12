import { ArrowLeftOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import productApi from '../../../../api/productApi';
import { Product } from '../../../../models';
import ProductForm from '../../../product/components/ProductForm';
import './AddEditProductListPage.scss';

const AddEditProductListPage = () => {
  const history = useHistory();
  const params = useParams<{ productId: string }>();
  const productId = params?.productId;
  const isEdit = !!productId;
  const [product, setProduct] = useState<Product>();
  console.log(product);

  useEffect(() => {
    if (!isEdit) return;

    (async () => {
      try {
        const response = await productApi.getProductById(productId);
        setProduct(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId, isEdit]);

  const initialValues = {
    id: '',
    name: '',
    color: '',
    price: '',
    description: '',
    thumbnail: '',
    ...product,
  } as Product;

  const handleFormSubmit = async (formValues: Product) => {
    if (isEdit) {
      await productApi.updateProduct(formValues);
    } else {
      await productApi.addProduct(formValues);
    }
    history.push('/adminThunk/product');
  };

  return (
    <div className="container">
      {/* Navigation */}
      <Link to="/adminThunk/product">
        <ArrowLeftOutlined /> Back To Product List
      </Link>

      {/* Form edit area */}
      {(!isEdit || Boolean(product)) && (
        <div className="editArea">
          {/* <ProductThunkForm onSubmit={handleFormSubmit} initialValues={initialValues} /> */}
          <ProductForm initialValues={initialValues} onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
};

export default AddEditProductListPage;
