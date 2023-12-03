import axios from "axios";
import { catalogActions } from "./catalog-slice";
import { eventActions } from "./event-slice";
import { getServices } from "./event-action";

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
    dispatch(eventActions.addListOfServices([]));
    axios({
      method: "GET",
      url: `${apiUrl}/Catalog/GetCatalogs?ParentId=${parentId}`,
    })
      .then((response) => {
        dispatch(catalogActions.toggleMyCatalogDetailsLoader(false));
        dispatch(catalogActions.addSelectedCatalogDetails(response.data));
        if (response.data.length) {
          dispatch(getServices(response.data[0].id));
        } else {
          dispatch(catalogActions.toggleShowCatalogDetailsError(true));
        }
      })
      .catch((error) => {
        setTimeout(() => {
          dispatch(catalogActions.toggleMyCatalogDetailsLoader(false));
          dispatch(catalogActions.toggleShowCatalogDetailsError(true));
        }, 10 * 10000);
      });
  };
};
export const getFilters = () => {
  return async (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Car/GetFilters`,
    })
      .then((response) => {
        dispatch(catalogActions.addListOfFilters(response.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
export const getCars = ({ data, pageNumber, pageSize }) => {
  return async (dispatch) => {
    const dataNeeded = `${
      data.classIds?.length ? `&ClassIds=${data.classIds}` : ""
    }${data.modelId ? `&ModelId=${data.modelId}` : ""}${
      data.fuelType ? `&FuelType=${data.fuelType}` : ""
    }${
      data.isGearAutomatic === 0 || data.isGearAutomatic
        ? `&IsGearAutomatic=${data.isGearAutomatic}`
        : ""
    }${data.peopleCapacity ? `&PeopleCapacity=${data.peopleCapacity}` : ""}${
      data.loadCapacity ? `&LoadCapacity=${data.loadCapacity}` : ""
    }`;
    axios({
      method: "GET",
      url: `${apiUrl}/Car/GetCars?PageNumber=${pageNumber}&PageSize=${pageSize}${dataNeeded}`,
    })
      .then((response) => {
        dispatch(catalogActions.addListOfFilteredCars(response.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
