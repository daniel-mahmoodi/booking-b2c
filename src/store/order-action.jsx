import axios from "axios";
import { orderActions } from "./order-slice";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const SendOrder = (token) => {
  return async (dispatch) => {
    dispatch(orderActions.toggleOrderLoading(true));
    const bodyFormData = new FormData();
    bodyFormData.append("paymentMethod", 1);
    bodyFormData.append("paymentGatewayId", 1);

    axios({
      method: "POST",
      url: `${apiUrl}/Order/SendOrder`,
      data: bodyFormData,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(orderActions.toggleOrderLoading(false));
        //handle success
        console.log("response", response);

        //    dispatch(loginRequest(userData.Email, userData.Password));
      })

      .catch(function (error) {
        dispatch(orderActions.toggleOrderLoading(true));
        console.log("error", error.response);
        setTimeout(() => {
          dispatch(orderActions.toggleOrderLoading(false));
        }, 2000);
        if (error.response?.status === 415)
          dispatch(orderActions.showCheckoutWarning(error.response.data));
      });
  };
};
