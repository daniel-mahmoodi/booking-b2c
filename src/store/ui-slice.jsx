import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  openOtpPage: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    sendUserToOtpPage(state, action) {
      state.openOtpPage = action.payload;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
