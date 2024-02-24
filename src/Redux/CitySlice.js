/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./CityActions";
import { getOtherDays } from "./CityActions";

const initialState = {
  isLoading: false,
  data: {},
  isError: false,
  isOtherDaysLoading: false,
  OtherDays: {},
  isOtherDaysError: false,
};
const CitySlice = createSlice({
  name: "CityWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      }),
      builder.addCase(getData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder.addCase(getOtherDays.pending, (state) => {
      state.isOtherDaysLoading = true;
    });
    builder.addCase(getOtherDays.fulfilled, (state, action) => {
      (state.isOtherDaysLoading = false),
        (state.isOtherDaysError = false),
        (state.OtherDays = action.payload);
    });
    builder.addCase(getOtherDays.rejected, (state) => {
      (state.isOtherDaysError = true), (state.isOtherDaysLoading = false);
    });
  },
});

export default CitySlice.reducer;
