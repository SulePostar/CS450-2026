import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import accountReducer from "./accountSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer
  }
});

export default store;