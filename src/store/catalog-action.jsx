import axios from "axios";
import { catalogActions } from "./catalog-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const fetchListOfCatalogs = () => {
  return async (dispatch) => {
    dispatch(catalogActions.toggleShowCatalogError(false));
    dispatch(catalogActions.toggleMyCatalogLoader(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Catalog/GetCatalogs`,
    })
      .then((response) => {
        dispatch(catalogActions.toggleMyCatalogLoader(false));
        dispatch(catalogActions.addCatalogsList(response.data));
        dispatch(
          catalogActions.addSelectedCatalogName(response.data[0].catalogName)
        );
        if (response.data[0].id) {
          dispatch(fetchCatalogDetails(response.data[0].id));
        }
      })
      .catch((error) => {
        console.log("error", error);
        setTimeout(() => {
          dispatch(catalogActions.toggleMyCatalogLoader(false));
          dispatch(catalogActions.toggleShowCatalogError(true));
        }, 10 * 10000);
      });
  };
};
export const fetchCatalogDetails = (parentId) => {
  return async (dispatch) => {
    dispatch(catalogActions.toggleShowCatalogDetailsError(false));
    dispatch(catalogActions.toggleMyCatalogDetailsLoader(true));

    axios({
      method: "GET",
      url: `${apiUrl}/Catalog/GetCatalogs?ParentId=${parentId}`,
    })
      .then((response) => {
        dispatch(catalogActions.toggleMyCatalogDetailsLoader(false));
        dispatch(catalogActions.addSelectedCatalogDetails(response.data));
        if (!response.data.length) {
          dispatch(catalogActions.toggleShowCatalogDetailsError(true));
        }
      })
      .catch((error) => {
        console.log("error", error);
        setTimeout(() => {
          dispatch(catalogActions.toggleMyCatalogDetailsLoader(false));
          dispatch(catalogActions.toggleShowCatalogDetailsError(true));
        }, 10 * 10000);
      });
  };
};
