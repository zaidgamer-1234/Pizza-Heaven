import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import cartReducer from "./cartListSlice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    cart: cartReducer,
  },
});

export default store;
