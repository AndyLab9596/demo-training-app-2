import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ListParams, ListResponse, PaginationParams, Product } from "../../models";
import productApi from "../../api/productApi";
import { RootState } from "../../app/store";

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
        _limit: 6,
    },
    pagination: {
        _page: 1,
        _limit: 6,
        _totalRows: 10
    }
}

export const fetchProductList = createAsyncThunk(
    'product/getList',
    async (params: PayloadAction<ListParams>, thunkAPI) => {
        const response = await productApi.getAllProduct(params);
        return response;
    }
)


const productThunkSlice = createSlice({
    name: 'productThunk',
    initialState,
    reducers: {
        getFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload
        },

        // getSearchDebounce(state, action: PayloadAction<ListParams>) {

        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductList.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductList.fulfilled, (state, action: PayloadAction<ListResponse<Product>>) => {
                state.loading = false;
                state.list = action.payload.data;
                state.pagination = action.payload.pagination;
            })
            .addCase(fetchProductList.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
            })
    }

})

// actions
export const productThunkAction = productThunkSlice.actions;

// Selectors:
export const productThunkLoading = (state: RootState) => state.productThunk.loading;
export const productThunkList = (state: RootState) => state.productThunk.list;
export const productThunkFilter = (state: RootState) => state.productThunk.filter;
export const productThunkPagination = (state: RootState) => state.productThunk.pagination;


// reducer
const productThunkReducer = productThunkSlice.reducer;
export default productThunkReducer;