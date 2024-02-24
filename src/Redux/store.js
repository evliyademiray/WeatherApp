import { configureStore } from "@reduxjs/toolkit";
import CityReducer from "./CitySlice";

const store = configureStore({
  reducer: {
    CityReducer,
  },
});

export default store;
