import { Box, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import React from 'react';
import { ChangeEvent } from 'react-router/node_modules/@types/react';
import { ListParams } from '../../../models';

interface ProductSearchProps {
  filter: ListParams;
  onSearchChange: (params: ListParams) => void;
}

const ProductSearch = ({ filter, onSearchChange }: ProductSearchProps) => {
  const handleDebounceSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    onSearchChange({
      ...filter,
      name_like: event.target.value,
    });
  };

  return (
    <Box mt={2}>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          id="search-by-name"
          onChange={handleDebounceSearch}
          startAdornment={<InputAdornment position="start">Search By Name</InputAdornment>}
        />
      </FormControl>
    </Box>
  );
};

export default ProductSearch;
