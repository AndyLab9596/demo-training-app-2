import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import productApi from "../../../../api/productApi";
import { Product } from "../../../../models";
import "./AddEditProductListPage.scss";

const AddEditProductListPage = () => {
  const params = useParams<{ productId: string }>();
  const productId = params?.productId;
  const isEdit = !!productId;
  const [product, setProduct] = useState<Product>();

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

  return (
    <div className="container">
      {/* Navigation */}
      <Link to="/adminThunk/product">
        <ArrowLeftOutlined /> Back To Product List
      </Link>

      <div></div>
    </div>
  );
};

export default AddEditProductListPage;
