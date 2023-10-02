import { createSlice } from "@reduxjs/toolkit";
const initialCatalogState = {
  catalogsList: [],
  childrenOfCatalog: [],
  filterSelectedId: 0,
  selectedCatalogName: "",
};
const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialCatalogState,
  reducers: {
    addCatalogsList(state, action) {
      state.catalogsList = action.payload;
    },
    addCatalogChildrenList(state, action) {
      state.childrenOfCatalog = action.payload;
    },
    addFilterItemId(state, action) {
      state.filterSelectedId = action.payload;
    },
    addSelectedCatalogName(state, action) {
      state.selectedCatalogName = action.payload;
    },
  },
});
export const catalogActions = catalogSlice.actions;
export default catalogSlice.reducer;
