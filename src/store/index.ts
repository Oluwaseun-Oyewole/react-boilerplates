import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "../redux/store/query";
import rootReducer from "./root.reducers";

export const store = () => {
  return configureStore({
    reducer: {
      rootReducer,
      [TodoSlice.reducerPath]: TodoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([TodoSlice.middleware]),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
