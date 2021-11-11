import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import productApi from "../../../api/productApi";
import { Product } from "../../../models";
import { ChevronLeft } from "@material-ui/icons";
import ProductForm from "../components/ProductForm";
const AddEditPage = () => {
  const history = useHistory();
  const params = useParams<{ productId: string }>();
  const productId = params.productId;
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

  const initialValues = {
    id: "",
    name: "",
    color: "",
    price: "",
    description: "",
    thumbnail: "",
    ...product,
  } as Product;

  const handleFormSubmit = async (formValues: Product) => {
    if (isEdit) {
      await productApi.updateProduct(formValues);
    } else {
      await productApi.addProduct(formValues);
    }
    history.push("/adminSaga/product");
  };

  return (
    <Box>
      <Link to="/adminSaga/product">
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          p={3}
        >
          <ChevronLeft />
          <Typography variant="caption">Back to Product List</Typography>
        </Box>
      </Link>
      <Box p={1}>
        <Typography variant="h4">
          {isEdit ? "Update Product Info" : "Add new Product"}
        </Typography>
      </Box>
      {(!isEdit || Boolean(product)) && (
        <Box mt={3}>
          <ProductForm
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
          />
        </Box>
      )}
    </Box>
  );
};

export default AddEditPage;
