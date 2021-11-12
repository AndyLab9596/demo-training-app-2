import React from "react";
import { Product } from "../../../../models";

export interface ProductThunkFormProps {
  initialValues: Product;
  onSubmit: (formValues: Product) => void;
}

const ProductThunkForm = ({
  initialValues,
  onSubmit,
}: ProductThunkFormProps) => {
  return <div></div>;
};

export default ProductThunkForm;
