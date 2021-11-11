import React, { Fragment } from "react";
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
                    // onClick={() => onRemove?.(student)}
                    // onClick={() => handleRemoveStudent(student)}
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
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove student?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove student {student?.name} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={() => handleRemoveConfirm?.(student as Student)}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
    </Fragment>
  );
};

export default ProductTable;
