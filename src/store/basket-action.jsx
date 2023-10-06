// import { uiActions } from "./Ui-slice";
import { basketActions } from "./basket-slice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const getCartData = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${apiUrl}Cart/GetCart`
      );

      if (!response.ok) {
        throw new Error("Could not fetch basket data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const basketData = await fetchData();

      let totalPrice = 0;
      basketData.items.map((item) =>
        item.product.price === item.product.discountedPrice
          ? (totalPrice = totalPrice + item.product.price * item.quantity)
          : (totalPrice =
              totalPrice + item.product.discountedPrice * item.quantity)
      );
      let totalQuantity = 0;
      basketData.items.map(
        (item) => (totalQuantity = totalQuantity + item.quantity)
      );
      const totalDiscountedPrice = basketData.totalDiscountedAmount;

      dispatch(
        basketActions.replaceCart({
          basketState: {
            basketData,
            totalPrice,
            totalQuantity,
            totalDiscountedPrice,
          } || {
            basketData: { items: [] },
            totalPrice: 0,
            totalQuantity: 0,
            totalDiscountedPrice: 0,
          },
        })
      );
      dispatch(basketActions.compareServerAndLocalItems(true));
    } catch (error) {
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
    let cartItems = { cartItems: [] };

    const newItems = basket?.filter((item) => item.quantity !== 0);
    console.log("newItems", newItems);
    if (newItems.length !== 0) {
      newItems.map((item) => {
        return cartItems.cartItems.push({
          ticketId: item.ticket.id,
          count: item.quantity,
        });
      });
    }
    console.log("cartItems", cartItems);

    axios({
      method: "POST",
      url: `${apiUrl}/Cart/AddCart`,
      data: cartItems,
      headers: { Authorization: `bearer ${token}`, "Content-Type": " application/json" },
    })
      .then((response) => {
        // dispatch(basketActions.receivedData(true));
        dispatch(getCartData(token))
        console.log("response", response);
      })
      .catch((error) => console.log("error", error));
  };
};
