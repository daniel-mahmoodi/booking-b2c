import { createSlice } from "@reduxjs/toolkit";

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
    //     replaceBasket(state, action) {
    //       state.items = action.payload.basketState.basketData;
    //       state.totalPrice = action.payload.basketState.totalPrice;
    //       state.totalDiscountedPrice =
    //         action.payload.basketState.totalDiscountedPrice;
    //       state.totalQuantity = action.payload.basketState.totalQuantity;
    //     },
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

      newItem.price === newItem.discountedPrice
        ? (state.totalPrice =
            state.totalPrice + newItem.price * newItem.quantity)
        : (state.totalPrice =
            state.totalPrice + newItem.discountedPrice * newItem.quantity);
      state.totalDiscountedPrice = state.totalPrice;
      state.totalQuantity++;
      const existingBasketItem = state.items?.find(
        (item) => item.ticket.id === newItem.id
      );
      //  state.hasItem = existingBasketItem ? true : false;
      if (!existingBasketItem) {
        state.items?.push({
          ticket: newItem,
          quantity: newItem.quantity,
        });
      } else {
        existingBasketItem.quantity++;
      }
    },
    //
    removeItemFromBasket(state, action) {
      const id = action.payload;
      state.basketChanged = true;
      const existingBasketItem = state.items?.find((item) => item.ticket.id === id);

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
