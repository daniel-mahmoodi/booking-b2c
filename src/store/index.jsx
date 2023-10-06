import { configureStore } from "@reduxjs/toolkit";

// Redux Persist:
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
//.
import catalogReducer from "./catalog-slice";
import profileReducer from "./profile-slice";
import eventReducer from "./event-slice";
import basketReducer from "./basket-slice";
import authReducer from "./auth-slice";

// Redux Persist:
const persistAuthConfig = {
  key: "auth-root",
  storage,
};
const persistEventConfig = {
  key: "event-root",
  storage,
};
const persistBasketConfig = {
  key: "basket-root",
  storage,
};
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedEventReducer = persistReducer(persistEventConfig, eventReducer);
const persistedBasketReducer = persistReducer(
  persistBasketConfig,
  basketReducer
);
// .

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    profile: profileReducer,
    event: persistedEventReducer,
    basket: persistedBasketReducer,
    auth: persistedAuthReducer,
  },
  // Redux Persist:
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
  //.
});

export default store;

// Redux Persist:
export const persistor = persistStore(store);
// .
