import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse, PaginationParams, Product } from "../../models";


export interface ProductState {
    loading: boolean;
    list: Product[];
    filter: ListParams;
    pagination: PaginationParams;
}


const initialState: ProductState = {
    loading: false,
    list: [],
    filter: {
        _page: 1,
        _limit: 10,
    },
    pagination: {
        _page: 1,
        _limit: 10,
        _totalRows: 10
    }
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProductList(state, action: PayloadAction<ListParams>) {
            state.loading = true
        },

        fetchProductListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
            state.loading = false;
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
        },

        fetchProductListFailed(state, action: PayloadAction<string>) {
            state.loading = false;
        },

        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload
        }

    }
})

// Actions
export const productActions = productSlice.actions;

// Selectors

// Reducers
const productReducer = productSlice.reducer;
export default productReducer;