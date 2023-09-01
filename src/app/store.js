import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userslices";
import cartReducer from "../slices/cartslices";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer,
  },
});
