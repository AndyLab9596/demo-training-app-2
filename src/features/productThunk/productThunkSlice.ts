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

export const fetchThunkProductList = createAsyncThunk(
    'product/getList',
    async () => {
        const response = await productApi.getAll();
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
            .addCase(fetchThunkProductList.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchThunkProductList.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchThunkProductList.rejected, (state, action: PayloadAction<any>) => {
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