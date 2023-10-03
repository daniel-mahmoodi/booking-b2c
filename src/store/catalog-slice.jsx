import { createSlice } from "@reduxjs/toolkit";
const initialCatalogState = {
  listOfCatalogs: [],
  catalogDetails: [],
  filterSelectedId: 0,
  selectedCatalogName: "",
  myCatalogLoader: false,
  showCatalogError: false,
  myCatalogDetailsLoader: false,
  showCatalogDetailsError: false,
};
const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialCatalogState,
  reducers: {
    addCatalogsList(state, action) {
      state.listOfCatalogs = action.payload;
    },
    addSelectedCatalogDetails(state, action) {
      state.catalogDetails = action.payload;
    },
    addFilterItemId(state, action) {
      state.filterSelectedId = action.payload;
    },
    addSelectedCatalogName(state, action) {
      state.selectedCatalogName = action.payload;
    },
    toggleMyCatalogLoader(state, action) {
      state.myCatalogLoader = action.payload;
    },
    toggleShowCatalogError(state, action) {
      state.showCatalogError = action.payload;
    },
    toggleMyCatalogDetailsLoader(state, action) {
      state.myCatalogDetailsLoader = action.payload;
    },
    toggleShowCatalogDetailsError(state, action) {
      state.showCatalogDetailsError = action.payload;
    },
  },
});
export const catalogActions = catalogSlice.actions;
export default catalogSlice.reducer;
