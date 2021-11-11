import React from "react";
import { Product } from "../../../models";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  LinearProgress,
  Avatar,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import InputField from "../../../components/FormField/InputField";

export interface ProductFormProps {
  initialValues: Product;
  onSubmit: (formValues: Product) => void;
}

const ProductForm = ({ initialValues, onSubmit }: ProductFormProps) => {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter product's name"),
    color: yup.string().required("Please enter product's color"),
    description: yup.string().required("Please enter product's description"),
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<Product>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: Product) => {
    console.log("formValues", formValues);
    if (!onSubmit) return;

    try {
      await onSubmit?.(formValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={3}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <InputField name="name" control={control} label="Product name" />
          </Grid>

          <Grid item xs={3}>
            <InputField name="color" control={control} label="Product color" />
          </Grid>

          <Grid item xs={3}>
            <InputField
              name="description"
              control={control}
              label="Product description"
            />
          </Grid>

          <Grid item xs={3}>
            <InputField
              name="price"
              control={control}
              label="Product Price"
              type="number"
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting && <CircularProgress color="secondary" size={16} />}
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProductForm;
