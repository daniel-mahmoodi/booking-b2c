import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  checkoutWarning: {},
  orderLoading: false,
  message: null,
  finalMessage: null,
  orderId: null,
  url: "",
  isOrderDiscounted: false,
  discountPercentages: [],
  selectedIndex: null,
  paymentDetails: {},
  listOfOrders: {},
  selectedOrderDetails: {},
  orderTicketsDetails: {},
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
    addSpinnerData(state, action) {
      state.discountPercentages = action.payload.discountPercentages;
      state.selectedIndex = action.payload.selectedIndex;
    },
    sendUserToPay(state, action) {
      state.url = action.payload.url;
      state.finalMessage = action.payload.finalMessage;
      // console.log("message", current(action.payload), current(state.message));
      // state.url = action.payload.url;
    },
    addPaymentDetails(state, action) {
      state.paymentDetails = action.payload;
    },
    addAllOrders(state, action) {
      state.listOfOrders = action.payload;
    },
    addSelectedOrderDetails(state, action) {
      state.selectedOrderDetails = action.payload;
    },
    addOrderTicketsDetails(state, action) {
      state.orderTicketsDetails = action.payload;
    },
  },
});
export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
