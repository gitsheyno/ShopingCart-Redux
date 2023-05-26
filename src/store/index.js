/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice";
import cartVisibilitySlice from "../store/catVisibility";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartVisbility: cartVisibilitySlice.reducer,
  },
});

export default store;
