import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Features/app/appSlice";

const store = configureStore({
  reducer: {
    App: appReducer,
  },
});

export default store;
