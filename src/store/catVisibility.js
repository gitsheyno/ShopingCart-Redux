/** @format */

import { createSlice } from "@reduxjs/toolkit";

const cartVisibilitySlice = createSlice({
  name: "visibility",
  initialState: { visibility: false, notification: null },
  reducers: {
    handlerCartVisibility(state) {
      state.visibility = !state.visibility;
    },
    hanlderNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const cartVisbilityActins = cartVisibilitySlice.actions;
export default cartVisibilitySlice;
