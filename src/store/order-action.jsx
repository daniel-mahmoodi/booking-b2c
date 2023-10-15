import axios from "axios";
import { orderActions } from "./order-slice";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const SendOrder = (token) => {
  return async (dispatch) => {
    dispatch(orderActions.toggleOrderLoading(true));

    axios({
      method: "POST",
      url: `${apiUrl}/Order/SendOrder`,
      data: { paymentMethod: 1, paymentGatewayId: 1 },
      headers: { Authorization: token, "Content-Type": "application/json" },
    })
      .then(function (response) {
        dispatch(orderActions.toggleOrderLoading(false));
        //handle success

        if (response.status === 200)
          dispatch(
            orderActions.sendUserToPay({
              message: response.data.message,
              url: response.data.url,
            })
          );
        // if (response) dispatch(orderActions.sendUserToPay(response.data));
        // }
        //    dispatch(loginRequest(userData.Email, userData.Password));
      })

      .catch(function (error) {
        dispatch(orderActions.toggleOrderLoading(true));
        console.log("error", error);
        setTimeout(() => {
          dispatch(orderActions.toggleOrderLoading(false));
        }, 2000);
        if (error.response?.status === 415)
          dispatch(orderActions.showCheckoutWarning(error.response.data));
      });
  };
};
