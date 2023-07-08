import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uuidSlice from "./uuid";
import reissueSlice from "./reissue";

const NODE_ENV = process.env.NODE_ENV === "development";

const rootReducer = combineReducers({
  uuid: uuidSlice.reducer,
  reissue: reissueSlice.reducer,
});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: NODE_ENV,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(),
  });
};

export const store = makeStore();
