import { createSlice } from "@reduxjs/toolkit";
const initialCatalogState = {
  catalogsList: [],
};
const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialCatalogState,
  reducers: {
    addCatalogsList(state, action) {
      state.catalogsList = action.payload;
    },
  },
});
export const catalogActions = catalogSlice.actions;
export default catalogSlice.reducer;
