import { createSlice, current } from "@reduxjs/toolkit";

const defaultBasketState = {
  items: [],
  mobile: null,
  userFullName: "",
  favoriteItems: { items: [] },
  totalPrice: 0,
  totalDiscountedPrice: 0,
  totalQuantity: 0,
  basketChanged: false,
  hasItem: false,
  reseivdeDataCorrectly: false,
  sendingCoupon: true,
  checkServerAndLocalItems: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState: defaultBasketState,
  reducers: {
    eraseAllBasket(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.totalDiscountedPrice = 0;
      // state.basketChanged = true;
    },
    replaceBasket(state, action) {
      state.items = action.payload.basketState.resultTransformedData;
      state.mobile = action.payload.basketState.mobile;
      state.userFullName = action.payload.basketState.userFullName;
      state.totalDiscountedPrice = action.payload.basketState.totalPrice;
      state.totalQuantity = action.payload.basketState.totalQuantity;
      // console.log("current", current(state));
      // console.log("current State before:", state, action.payload);
    },
    //     changeTotalDiscountedAmountAfterAddingCoupon(state, action) {
    //       state.totalDiscountedPrice = action.payload;
    //     },
    //     toggleChangeToFalse(state) {
    //       state.basketChanged = false;
    //     },
    toggleBasketChanges(state) {
      state.basketChanged = !state.basketChanged;
    },
    //     toggleCouponButton(state, action) {
    //       state.sendingCoupon = action.payload;
    //     },
    //     compareServerAndLocalItems(state, action) {
    //       state.checkServerAndLocalItems = action.payload;
    //     },
    //     receivedData(state, action) {
    //       state.reseivdeDataCorrectly = action.payload;
    //     },

    addItemToBasket(state, action) {
      const newItem = action.payload;
      state.basketChanged = true;

      state.totalQuantity++;
      const existingService = state.items.find(
        (event) => event.eventId === newItem.eventId
      );
      if (existingService) {
        const existingBasketItem = existingService.tickets?.find(
          (item) => item.ticketId === newItem.tickets.ticketId
        );
        if (existingBasketItem) {
          existingBasketItem.count++;
        } else {
          if (existingService.tickets) {
            existingService.tickets?.push({ ...newItem.tickets });

            // console.log(
            //   "State before:here",
            //   existingBasketItem,
            //   newItem.tickets.ticketId,
            //   current(existingService.tickets),
            //   current(state.items)
            // );
          } else {
            existingService.push({ tickets: [{ ...newItem.tickets }] });
          }
        }
      } else {
        state.items?.push({
          eventId: newItem.eventId,
          eventTitle: newItem.eventTitle,
          tickets: [{ ...newItem.tickets }],
        });
      }
      const allPrices = state.items.flatMap((event) =>
        event.tickets.map((ticket) => ticket.price * ticket.count)
      );

      state.totalDiscountedPrice = allPrices.reduce(
        (sum, price) => sum + price,
        0
      );
      //   newItem.tickets.price === newItem.tickets.discountedPrice
      //   ? (state.totalPrice =
      //       state.totalPrice + newItem.tickets.price * newItem.tickets.count)
      //   : (state.totalPrice =
      //       state.totalPrice +
      //       newItem.tickets.discountedPrice * newItem.tickets.count);
      // state.totalDiscountedPrice = state.totalPrice;
    },
    //
    removeItemFromBasket(state, action) {
      const { ticketId, eventId } = action.payload;
      state.basketChanged = true;
      const existingService = state.items.find(
        (event) => event.eventId === eventId
      );
      const existingBasketItem = existingService?.tickets.find(
        (item) => item.ticketId === ticketId
      );

      // existingBasketItem.price === existingBasketItem.discountedPrice
      //   ? (state.totalPrice = state.totalPrice - existingBasketItem.price)
      //   : (state.totalPrice =
      //       state.totalPrice - existingBasketItem.discountedPrice);
      // state.totalDiscountedPrice = state.totalPrice;

      state.totalQuantity--;

      if (existingBasketItem.count === 1) {
        existingBasketItem.count = 0;
        state.items.map((item) => {
          // Check if the item's eventId and ticketId match the ones to be deleted
          if (item.eventId === eventId) {
            // Filter out the ticket with the specified ticketId
            item.tickets = item.tickets.filter(
              (ticket) => ticket.ticketId !== ticketId
            );
            item.count = 0;
            if (!item.tickets.length) {
              state.items = state.items.filter(
                (event) => event.eventId !== item.eventId
              );
            
            }
          }
          return item;
        });
      } else {
        existingBasketItem.count--;
      }
      const allPrices = state.items.flatMap((event) =>
        event.tickets.map((ticket) => ticket.price * ticket.count)
      );

      state.totalDiscountedPrice = allPrices.reduce(
        (sum, price) => sum + price,
        0
      );
    },
    eraseItemFromBasket(state, action) {
      const { ticketId, eventId } = action.payload;
      state.basketChanged = true;
      // const existingBasketItem = state.items?.find(
      //   (anyItem) => anyItem.ticket.id === ticketId
      // );

      // existingBasketItem.price === existingBasketItem.discountedPrice
      //   ? (state.totalPrice =
      //       state.totalPrice -
      //       existingBasketItem.price * existingBasketItem.count)
      //   : (state.totalPrice =
      //       state.totalPrice -
      //       existingBasketItem.discountedPrice * existingBasketItem.count);
      // state.totalDiscountedPrice = state.totalPrice;
      // state.items = state.items?.filter(
      //   (item) => item.ticket.ticketId !== ticketId
      // );
      // existingBasketItem.count = 0;
      const existingService = state.items.find(
        (event) => event.eventId === eventId
      );
      if (existingService) {
        const existingBasketItem = existingService.tickets?.find(
          (item) => item.ticketId === ticketId
        );
        if (existingBasketItem) {
          state.totalQuantity = 0;
          existingBasketItem.count = 0;
          state.items.map((item) => {
            // Check if the item's eventId and ticketId match the ones to be deleted
            if (item.eventId === eventId) {
              // Filter out the ticket with the specified ticketId
              item.tickets = item.tickets.filter(
                (ticket) => ticket.ticketId !== ticketId
              );
              if (!item.tickets.length) {
                state.items = state.items.filter(
                  (event) => event.eventId !== item.eventId
                );
                // console.log("State before:here");
              }
            }
            return item;
          });

          // existingBasketItem.count = 0;
          // state.items.map((event) =>
          //   event.tickets.filter(
          //     (item) => item.ticketId === existingBasketItem.ticketId
          //   )
          // );
          // const newBasket = state.items.flatMap((item) =>
          //   item.tickets.map((item) => item.ticketId === ticketId)
          // );

          // console.log(
          //   "State beforeexistingBasketItem:",
          //   current(existingBasketItem)
          // );
          // console.log("State beforenewbasket:", current(newBasket));
        } else {
          // existingService?.tickets?.push([{ ...newItem.tickets }]);
        }
      } else {
        // state.items?.push({
        //   eventId: newItem.eventId,
        //   eventTitle: newItem.eventTitle,
        //   imageUrl: newItem.imageUrl,
        //   tickets: [{ ...newItem.tickets }],
        // });
      }
      // console.log("State before:", state.items);
      const allPrices = state.items.flatMap((event) =>
        event.tickets.map((ticket) => ticket.price * ticket.count)
      );

      state.totalDiscountedPrice = allPrices.reduce(
        (sum, price) => sum + price,
        0
      );
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
