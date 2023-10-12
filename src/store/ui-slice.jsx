import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  openOtpPage: false,
  showSideBar: false,
  showSequencesModal: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    sendUserToOtpPage(state, action) {
      state.openOtpPage = action.payload;
    },
    toggleSideBar(state, action) {
      state.showSideBar = action.payload;
    },
    toggleSansesModal(state, action) {
      state.showSequencesModal = action.payload;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
