import { createSlice } from "@reduxjs/toolkit";

const initialEventState = {
  listOfServices: [],
  listOfSanses: [],
  serviceDetails: {},
  selectedSansData: {},
  ticketDetails: {},
  myCardsLoader: false,
  showCardsError: false,
  acceptButtonLoading: false,
  ticketLoading: false,
  showTicketComponent: false,
};
const eventSlice = createSlice({
  name: "event",
  initialState: initialEventState,
  reducers: {
    addListOfSanses(state, action) {
      state.listOfSanses = action.payload;
    },
    addListOfServices(state, action) {
      state.listOfServices = action.payload;
    },
    addServiceDetails(state, action) {
      state.serviceDetails = action.payload;
    },
    addTicketDetails(state, action) {
      state.ticketDetails = action.payload;
    },
    toggleTicketLoading(state, action) {
      state.ticketLoading = action.payload;
    },
    toggleTicketComponent(state, action) {
      state.showTicketComponent = action.payload;
    },
    addSelectedSansData(state, action) {
      state.selectedSansData = action.payload;
    },
    toggleMyCardsLoader(state, action) {
      state.myCardsLoader = action.payload;
    },
    toggleShowCardsError(state, action) {
      state.showCardsError = action.payload;
    },
    toggleAcceptButtonLoading(state, action) {
      state.acceptButtonLoading = action.payload;
    },
  },
});
export const eventActions = eventSlice.actions;
export default eventSlice.reducer;
