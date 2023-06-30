import uuidSlice from "./uuid";
import userSlice from "./user";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const NODE_ENV = process.env.NODE_ENV === "development";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  uuid: uuidSlice.reducer,
});
const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: NODE_ENV,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat
        //clubDetailApi.middleware
        (),
  });
};

export const store = makeStore();
