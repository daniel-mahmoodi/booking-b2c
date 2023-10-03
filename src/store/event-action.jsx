import axios from "axios";
import { eventActions } from "./event-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const getServices = (id) => {
  return async (dispatch) => {
    dispatch(eventActions.toggleMyCardsLoader(true));
    dispatch(eventActions.toggleShowCardsError(false));
    axios({
      method: "GET",
      url: `${apiUrl}/Ticket/GetServices?CatalogId=${id}`,
    })
      .then((response) => {
        dispatch(eventActions.toggleMyCardsLoader(false));
        dispatch(eventActions.addListOfServices(response.data));
        if (!response.data.length) {
          dispatch(eventActions.toggleShowCardsError(true));
        }
      })
      .catch((error) => {
        dispatch(eventActions.toggleMyCardsLoader(false));
        dispatch(eventActions.toggleShowCardsError(true));
      });
  };
};
export const getServiceDetails = (id) => {
  return async (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Ticket/GetServiceDetails?ServiceId=${id}`,
    })
      .then((response) => {
        dispatch(eventActions.addServiceDetails(response.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const getSanses = (id) => {
  return async (dispatch) => {
    dispatch(eventActions.toggleAcceptButtonLoading(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Sans/GetSanses?serviceId=${id}`,
    })
      .then((response) => {
        dispatch(eventActions.toggleAcceptButtonLoading(false));
        dispatch(eventActions.addListOfSanses(response.data));
        dispatch(eventActions.toggleSansesModal(true));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(eventActions.toggleAcceptButtonLoading(false));
      });
  };
};
