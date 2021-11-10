import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";
import { ListParams, ListResponse, Product } from "../../models";
import { productActions } from "./productSlice";


function* fetchProductList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<Product> = yield call(productApi.getAllProduct, action.payload);
        yield put(productActions.fetchProductListSuccess(response))

    } catch (error) {
        console.log(error)
    }
}

export function* productSaga() {

    yield takeLatest(productActions.fetchProductList, fetchProductList)
}