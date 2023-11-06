import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  activeTab: "dashboard",
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    selectActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});
export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
