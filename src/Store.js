import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import quantityReducer from "./reducers/quantitySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    quantity: quantityReducer,
  },
});
