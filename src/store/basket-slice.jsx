import { createSlice, current } from "@reduxjs/toolkit";

const defaultBasketState = {
  items: [],
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
    //     eraseAllBasket(state) {
    //       state.items.items = [];
    //       state.totalPrice = 0;
    //       state.totalQuantity = 0;
    //       state.totalDiscountedPrice = 0;
    //       state.basketChanged = true;
    //     },
    replaceBasket(state, action) {
      state.items = action.payload.basketState.basketData.basketItems;
      state.totalPrice = action.payload.basketState.totalPrice;
      console.log("current", current(state));
      console.log("State before:", state, action.payload);
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
      // console.log("State before:", state, action.payload);
     
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
            existingService.tickets?.push([{ ...newItem.tickets }]);
          } else {
            existingService.push({ tickets: [{ ...newItem.tickets }] });
          }
        }
      } else {
        state.items?.push({
          eventId: newItem.eventId,
          eventTitle: newItem.eventTitle,
          imageUrl: newItem.imageUrl,
          tickets: [{ ...newItem.tickets }],
        });
      }
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

      existingBasketItem.price === existingBasketItem.discountedPrice
        ? (state.totalPrice = state.totalPrice - existingBasketItem.price)
        : (state.totalPrice =
            state.totalPrice - existingBasketItem.discountedPrice);
      state.totalDiscountedPrice = state.totalPrice;

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
          }
          return item;
        });
      } else {
        existingBasketItem.count--;
      }
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
                existingBasketItem.count = 0;
                state.totalQuantity = state.totalQuantity - existingBasketItem.count;
          state.items.map((item) => {
            // Check if the item's eventId and ticketId match the ones to be deleted
            if (item.eventId === eventId) {
              // Filter out the ticket with the specified ticketId
              item.tickets = item.tickets.filter(
                (ticket) => ticket.ticketId !== ticketId
              );
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
      console.log("State before:", state.items);
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
