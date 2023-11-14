import axios from "axios";
import { orderActions } from "./order-slice";
import { basketActions } from "./basket-slice";
import { uiActions } from "./ui-slice";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const sendOrder = (token) => {
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
          dispatch(basketActions.eraseAllBasket());
          dispatch(uiActions.toggleCheckoutModal(false));
          dispatch(
            orderActions.sendUserToSpinner({
              message: response.data.message,
              orderId: response.data.orderId,
              isOrderDiscounted: response.data.isOrderDiscounted,
            })
          );
          dispatch(calculateDiscount(token, response.data.orderId));
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

export const calculateDiscount = (token, orderId) => {
  return async (dispatch) => {
    // dispatch(orderActions.toggleOrderLoading(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Order/CalculateDiscount?OrderId=${orderId}`,
      headers: { Authorization: token },
    })
      .then(function (response) {
        if (response.status === 200) {
          dispatch(
            orderActions.addSpinnerData({
              discountPercentages: response.data.discountPercentages,
              selectedIndex: response.data.selectedIndex,
              spinnerData: response.data
            })
          );
          dispatch(uiActions.toggleSpinnerModal(true));
        }
        // dispatch(orderActions.toggleOrderLoading(false));
      })

      .catch(function (error) {
        // dispatch(orderActions.toggleOrderLoading(true));
        console.log("error", error);
        setTimeout(() => {
          // dispatch(orderActions.toggleOrderLoading(false));
        }, 2000);
        // if (error.response?.status === 415)
        // dispatch(orderActions.showCheckoutWarning(error.response.data));
      });
  };
};
export const finalizeOrder = ({
  token,
  isSpinnerTurned,
  paymentMethod,
  paymentGatewayId,
  orderId,
}) => {
  return async (dispatch) => {
    // dispatch(orderActions.toggleOrderLoading(true));
    axios({
      method: "POST",
      url: `${apiUrl}/Order/FinalizeOrder`,
      data: { isSpinnerTurned, paymentMethod, paymentGatewayId, orderId },
      headers: { Authorization: token, "Content-Type": "application/json" },
    })
      .then(function (response) {
        if (response.status === 200) {
          dispatch(
            orderActions.sendUserToPay({
              url: response.data.url,
              message: response.data.message,
            })
          );
        }
        //   dispatch(
        //     orderActions.addSpinnerData({
        //       discountPercentages: response.data.discountPercentages,
        //       selectedIndex: response.data.selectedIndex,
        //     })
        //   );
        //   dispatch(uiActions.toggleSpinnerModal(true));
        // }
        // // dispatch(orderActions.toggleOrderLoading(false));
      })

      .catch(function (error) {
        // dispatch(orderActions.toggleOrderLoading(true));
        console.log("error", error);
        setTimeout(() => {
          // dispatch(orderActions.toggleOrderLoading(false));
        }, 2000);
        // if (error.response?.status === 415)
        // dispatch(orderActions.showCheckoutWarning(error.response.data));
      });
  };
};

export const getPaymentDetails = (token, id) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Payment/PaymentDetails?PaymentId=${id}`,
      headers: { Authorization: token },
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(orderActions.addPaymentDetails(response.data));
        }
      })
      .catch((error) => {
        console.log("error getPayment", error);
      });
  };
};

export const getAllOrders = (token) => {
  return (dispatch) => {
    dispatch(orderActions.getAllOrdersLoading(true))
    axios({
      method: "GET",
      url: `${apiUrl}/Order/All`,
      headers: { Authorization: token },
    })
    .then((response) => {
      dispatch(orderActions.getAllOrdersLoading(false))
      if (response.status === 200) {
        dispatch(orderActions.addAllOrders(response.data));
      }
    })
    .catch((error) => {
        dispatch(orderActions.getAllOrdersLoading(false))
        console.log("error getAllOrders", error);
      });
  };
};
export const getOrderDetails = (token, id) => {
  return (dispatch) => {
    dispatch(orderActions.getOrderDetailsLoading(true))
    axios({
      method: "GET",
      url: `${apiUrl}/Order/Detail?OrderRefrence=${id}`,
      headers: { Authorization: token },
    })
    .then((response) => {
        dispatch(orderActions.getOrderDetailsLoading(false))
        if (response.status === 200) {
          dispatch(orderActions.addSelectedOrderDetails(response.data));
        }
      })
      .catch((error) => {
        dispatch(orderActions.getOrderDetailsLoading(false))
        console.log("error getAllOrders", error);
      });
  };
};
export const getOrderTicketsDetails = (token, orderId) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Order/GetOrderTicketsDetails?OrderId=${orderId}`,
      headers: { Authorization: token },
    })
      .then((response) => {
        console.log("orderTicketsDetails", response);
        // if (response.status === 200) {
          dispatch(orderActions.addOrderTicketsDetails(response.data));
        // }
      })
      .catch((error) => {
        console.log("error getAllOrders", error);
      });
  };
};
