import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from "./rootSaga";
import productReducer from '../features/product/productSlice';
import productThunkReducer from '../features/productThunk/productThunkSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  productThunk: productThunkReducer
});

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
