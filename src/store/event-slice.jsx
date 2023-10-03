import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialEventState = {
  listOfServices: [],
  listOfSanses: [],
  serviceDetails: {},
  selectedSansData: {},
  showSequencesModal: false,
  myCardsLoader: false,
  showCardsError: false,
  acceptButtonLoading: false,
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
    toggleSansesModal(state, action) {
      state.showSequencesModal = action.payload;
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
