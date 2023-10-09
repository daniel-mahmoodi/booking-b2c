// import { uiActions } from "./Ui-slice";
import { basketActions } from "./basket-slice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const getCartData = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`); // Replace with your actual token

      const options = {
        method: "GET", // Adjust the HTTP method as needed
        headers: headers,
      };
      const response = await fetch(`${apiUrl}/Cart/GetCart`, options);

      if (!response.ok) {
        throw new Error("Could not fetch basket data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const basketData = await fetchData();
      console.log("basketData", basketData);
      let totalPrice = 0;

      basketData.basketItems.flatMap((event) =>
        event.tickets.map((item) =>
          item.price === item.discountedPrice
            ? (totalPrice = totalPrice + item.price * item.count)
            : (totalPrice = totalPrice + item.discountedPrice * item.count)
        )
      );
      // let totalQuantity = 0;
      // basketData.items.map(
      //   (item) => (totalQuantity = totalQuantity + item.quantity)
      // );
      // const totalDiscountedPrice = basketData.totalDiscountedAmount;

      dispatch(
        basketActions.replaceBasket({
          basketState: {
            basketData,
            totalPrice,
          } || {
            basketData: {},
            totalPrice: 0,
          },
        })
      );
      // dispatch(basketActions.compareServerAndLocalItems(true));
    } catch (error) {
      console.log("error", error);
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "خطا!",
      //     message: "دریافت سبد خرید از سرور موفق نبود ",
      //   })
      // );
    }
  };
};

export const sendCartData = (basket, token) => {
  return async (dispatch) => {
    console.log("basket", basket);
    let sendCartItems = { cartItems: [] };
    const transformedData = {
      cartItems: basket.flatMap((item) =>
        item.tickets.map((ticket) => {
          return sendCartItems.cartItems.push({
            ticketId: ticket.ticketId,
            count: ticket.count,
          });
        })
      ),
    };

    console.log("transformedDatat", transformedData);
    // const newItems = basket?.filter((item) => item.quantity !== 0);
    // if (basket.length !== 0) {
    //   basket.map((item) => {
    //     return sendCartItems.cartItems.push({
    //       ticketId: item.ticket.id,
    //       count: item.quantity,
    //     });
    //   });
    // }
    console.log("transformedDatat sendCartItems", sendCartItems);

    axios({
      method: "POST",
      url: `${apiUrl}/Cart/AddCart`,
      data: sendCartItems,
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": " application/json",
      },
    })
      .then((response) => {
        // dispatch(basketActions.receivedData(true));
        dispatch(getCartData(token));
        console.log("response", response);
      })
      .catch((error) => console.log("error", error));
  };
};
