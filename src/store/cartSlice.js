/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { cartVisbilityActins } from "./catVisibility";
// const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    onAdd(state, action) {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.amount += 1;
        item.totalPrice = item.amount * item.price;
      } else {
        state.push(action.payload);
        action.payload.amount += 1;
        action.payload.totalPrice =
          action.payload.amount * action.payload.price;
      }
    },
    replaceData(state, action) {
      console.log(action.payload.cart);
      console.log(state);
      return action.payload.cart;
      // state = action.payload.cart;
    },
    onSub(state, action) {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item) => item.id === itemId);

      const item = state[itemIndex];
      if (item.amount > 1) {
        item.amount -= 1;
        item.totalPrice = item.amount * item.price;
      } else {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
