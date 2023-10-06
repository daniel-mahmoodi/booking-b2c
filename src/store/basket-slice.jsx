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

      newItem.tickets.price === newItem.tickets.discountedPrice
        ? (state.totalPrice =
            state.totalPrice + newItem.tickets.price * newItem.tickets.count)
        : (state.totalPrice =
            state.totalPrice +
            newItem.tickets.discountedPrice * newItem.tickets.count);
      state.totalDiscountedPrice = state.totalPrice;
      // state.totalQuantity++;
      const existingService = state.items.find(
        (event) => event.eventId === newItem.eventId
      );

      if (existingService) {
        const existingBasketItem = existingService.tickets?.find(
          (item) => item.id === newItem.tickets.id
        );
        if (existingBasketItem) {
          existingBasketItem.count++;
        } else {
          existingService?.tickets?.push([{ ...newItem.tickets }]);
        }
      } else {
        state.items?.push({
          eventId: newItem.eventId,
          eventTitle: newItem.eventTitle,
          imageUrl: newItem.imageUrl,
          tickets: [{ ...newItem.tickets }],
        });
      }
    },
    //
    removeItemFromBasket(state, action) {
      const id = action.payload;
      state.basketChanged = true;
      const existingBasketItem = state.items?.find(
        (item) => item.ticket.id === id
      );

      existingBasketItem.price === existingBasketItem.discountedPrice
        ? (state.totalPrice = state.totalPrice - existingBasketItem.price)
        : (state.totalPrice =
            state.totalPrice - existingBasketItem.discountedPrice);
      state.totalDiscountedPrice = state.totalPrice;

      state.totalQuantity--;

      if (existingBasketItem.quantity === 1) {
        existingBasketItem.quantity = 0;
        state.items = state.items.filter((item) => item.ticket.id !== id);
      } else {
        existingBasketItem.quantity--;
      }
    },
    eraseItemFromBasket(state, action) {
      const id = action.payload;
      state.basketChanged = true;
      const existingBasketItem = state.items?.find(
        (anyItem) => anyItem.ticket.id === id
      );

      existingBasketItem.price === existingBasketItem.discountedPrice
        ? (state.totalPrice =
            state.totalPrice -
            existingBasketItem.price * existingBasketItem.quantity)
        : (state.totalPrice =
            state.totalPrice -
            existingBasketItem.discountedPrice * existingBasketItem.quantity);
      state.totalDiscountedPrice = state.totalPrice;

      state.totalQuantity = state.totalQuantity - existingBasketItem.quantity;
      state.items = state.items?.filter((item) => item.ticket.id !== id);
      existingBasketItem.quantity = 0;
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
