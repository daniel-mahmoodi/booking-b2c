import axios from "axios";
import { orderActions } from "./order-slice";
import { basketActions } from "./basket-slice";
import { uiActions } from "./ui-slice";
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
        if (response.status === 200) {
          console.log("200");
          dispatch(basketActions.eraseAllBasket());
          dispatch(uiActions.toggleCheckoutModal(false));
          dispatch(
            orderActions.sendUserToSpinner({
              message: response.data.message,
              orderId: response.data.orderId,
              isOrderDiscounted: response.data.isOrderDiscounted,
            })
          );
        }
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
