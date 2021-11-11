import React, { Fragment, useState } from "react";
import { Product } from "../../../models";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

export interface ProductTableProps {
  productList: Product[];
  onEdit?: (product: Product) => void;
  onRemove?: (product: Product) => void;
}

const ProductTable = ({ productList, onEdit, onRemove }: ProductTableProps) => {
  const [product, setProduct] = useState<Product>();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveProduct = (product: Product) => {
    setProduct(product);
    setOpen(true);
  };

  const handleRemoveConfirm = (product: Product) => {
    if (onRemove) {
      onRemove(product);
    }
    setOpen(false);
  };

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Color</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  {product.description.length > 50
                    ? `${product.description.substr(0, 20)} ...`
                    : product.description}
                </TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onEdit?.(product)}
                    style={{ marginRight: 8 }}
                    size="small"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveProduct(product)}
                    size="small"
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove Product?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove product {product?.name} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={() => handleRemoveConfirm?.(product as Product)}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ProductTable;
