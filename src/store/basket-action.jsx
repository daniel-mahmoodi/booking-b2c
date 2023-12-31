// import { uiActions } from "./Ui-slice";
import { authActions } from "./auth-slice";
import { basketActions } from "./basket-slice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
// WHEN USER LOGIN now AND //USER IS LOGED IN: on Phone Add some order and on web add some again and on both is loggd in:
// get cart >>> object of prev orders
//prevOrders add to currentOrders
//* compare no one duplicated and new order List should add all of prev and cur orders togather
//compare prev item id with curr order id
//if a prev id is equal with one of curr id>>> gather all togather
//if a prev id not equal with any curr id >> add it tu basket
// AND THEN send add cart to server and get cart again to have full data from server
//

//USER NOT LOGED IN:
// no change

//9dey mah saheli
// export const getPrevCartDataAddToCurrCartData = (token) => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const headers = new Headers();
//       headers.append("Authorization", token); // Replace with your actual token

//       const options = {
//         method: "GET", // Adjust the HTTP method as needed
//         headers: headers,
//       };
//       const response = await fetch(`${apiUrl}/Cart/GetCart`, options);

//       if (!response.ok) {
//         throw new Error("Could not fetch basket data!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const basketData = await fetchData();
//       // we have to add count and ticketId to sendCartdata method
//       console.log('basketData',basketData);
//       // let totalPrice = 0;
//       // basketData.basketItems.flatMap((event) =>
//       //   event.tickets.map((item) =>
//       //     item.price === item.discountedPrice
//       //       ? (totalPrice = totalPrice + item.price * item.count)
//       //       : (totalPrice = totalPrice + item.discountedPrice * item.count)
//       //   )
//       // );
//       // let totalQuantity = 0;
//       // basketData.basketItems.flatMap((event) =>
//       //   event.tickets.map(
//       //     (item) => (totalQuantity = totalQuantity + item.count)
//       //   )
//       // );

//       // dispatch(
//       //   basketActions.replaceBasket({
//       //     basketState: {
//       //       basketData,
//       //       totalPrice,
//       //       totalQuantity,
//       //     } || {
//       //       basketData: {},
//       //       totalPrice: 0,
//       //       totalQuantity: 0,
//       //     },
//       //   })
//       // );
//       // dispatch(basketActions.compareServerAndLocalItems(true));
//     } catch (error) {
//       console.log("error", error);
//       // dispatch(
//       //   uiActions.showNotification({
//       //     status: "error",
//       //     title: "خطا!",
//       //     message: "دریافت سبد خرید از سرور موفق نبود ",
//       //   })
//       // );
//     }
//   };
// };

export const getCartData = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const headers = new Headers();
      headers.append("Authorization", token); // Replace with your actual token

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

      // const originalArray = [
      //   {
      //     "id":1123,
      //     "eventId":3,
      //     "eventTitle":"تفریحات دریایی سیشیل",
      //     "ticketId":1231,
      //     "ticketTitle":"شاتل",
      //     "sansTitle":"Title",
      //     "sansId":"723",
      //     "executeDate":"1/2/2024 12:11:01 AM",
      //     "price":239800.000000,
      //     "discountedPrice":239800.000000,
      //     "imageUrl":"wwwroot\\gallery\\ab9bc513-1909-4114-9e9e-a677109b5a0f20230923.jpg",
      //     "commission":0,
      //     "count":5,
      //     "capacity":10
      //   },
      //   // Add more objects as needed
      // ];

      const transformedBasketData = basketData.basketItems.map((item) => ({
        eventId: item.eventId,
        eventTitle: item.eventTitle,
        tickets: {
          commission: item.commission,
          count: item.count,
          capacity: item.capacity,
          ticketId: item.ticketId,
          ticketTitle: item.ticketTitle,
          sansTitle: item.sansTitle,
          sansId: item.sansId,
          executeDate: item.executeDate,
          price: item.price,
          discountedPrice: item.discountedPrice,
          imageUrl: item.imageUrl,
        },
      }));

      // console.log(transformedBasketData);
      let totalPrice = 0;
      transformedBasketData.flatMap((event) =>
        event.tickets.map((item) =>
          item.price === item.discountedPrice
            ? (totalPrice = totalPrice + item.price * item.count)
            : (totalPrice = totalPrice + item.discountedPrice * item.count)
        )
      );
      let totalQuantity = 0;
      transformedBasketData.flatMap((event) =>
        event.tickets.map(
          (item) => (totalQuantity = totalQuantity + item.count)
        )
      );

      dispatch(
        basketActions.replaceBasket({
          basketState: {
            mobile: basketData.mobile,
            userFullName: basketData.userFullName,
            transformedBasketData,
            totalPrice,
            totalQuantity,
          } || {
            transformedBasketData: [],
            mobile: '',
            userFullName: '',
            totalPrice: 0,
            totalQuantity: 0,
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

export const sendCartData = (basket, token, isUserDeletedLastItemOfBasket) => {
  return async (dispatch) => {
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
    console.log(
      "transformedData",
      transformedData,
      sendCartItems,
      isUserDeletedLastItemOfBasket
    );

    // const newItems = basket?.filter((item) => item.quantity !== 0);
    // if (basket.length !== 0) {
    //   basket.map((item) => {
    //     return sendCartItems.cartItems.push({
    //       ticketId: item.ticket.id,
    //       count: item.quantity,
    //     });
    //   });
    // }
    if (!isUserDeletedLastItemOfBasket) {
      dispatch(getCartData(token));
    } else {
      axios({
        method: "POST",
        url: `${apiUrl}/Cart/AddCart`,
        data: sendCartItems,
        headers: {
          Authorization: token,
          "Content-Type": " application/json",
        },
      })
        .then((response) => {
          // dispatch(basketActions.receivedData(true));
          dispatch(getCartData(token));
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            dispatch(authActions.logout());
            dispatch(basketActions.eraseAllBasket());
          }
        });
    }
  };
};
