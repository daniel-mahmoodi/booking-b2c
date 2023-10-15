import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  checkoutWarning: {},
  orderLoading: false,
  message: null,
  url: null,
};
const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    showCheckoutWarning(state, action) {
      state.checkoutWarning = action.payload;
    },
    toggleOrderLoading(state, action) {
      state.checkoutWarning = action.payload;
    },
    sendUserToPay(state, action) {
      state.message = action.payload.message;
      state.url = action.payload.url;
      // console.log("message", current(action.payload), current(state.message));
      // state.url = action.payload.url;
    },
  },
});
export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
