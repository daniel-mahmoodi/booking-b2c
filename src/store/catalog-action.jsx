import axios from "axios";
import { catalogActions } from "./catalog-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const fetchListOfCatalogs = () => {
  return async (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Catalog/GetCatalogs`,
    })
      .then((response) => {
        dispatch(catalogActions.addCatalogsList(response.data));
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
export const fetchChildrenOfCatalog = (parentId) => {
  return async (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Catalog/GetCatalogs?ParentId=${parentId}`,
    })
      .then((response) => {
        dispatch(catalogActions.addCatalogChildrenList(response.data));
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
