import { configureStore } from "@reduxjs/toolkit";

// Redux Persist:
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
//.
import catalogReducer from "./catalog-slice";
import eventReducer from "./event-slice";
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
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedEventReducer = persistReducer(persistEventConfig, eventReducer);
// .

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    event: persistedEventReducer,
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
