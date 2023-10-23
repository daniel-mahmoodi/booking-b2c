import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  checkoutWarning: {},
  orderLoading: false,
  message: null,
  orderId: null,
  isOrderDiscounted: false,
};
const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    showCheckoutWarning(state, action) {
      state.checkoutWarning = action.payload;
    },
    toggleOrderLoading(state, action) {
      state.orderLoading = action.payload;
    },
    sendUserToSpinner(state, action) {
      state.orderId = action.payload.orderId;
      state.message = action.payload.message;
      state.isOrderDiscounted = action.payload.isOrderDiscounted;
    },
    // sendUserToPay(state, action) {
    //   state.url = action.payload.url;
    //   // console.log("message", current(action.payload), current(state.message));
    //   // state.url = action.payload.url;
    // },
  },
});
export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
