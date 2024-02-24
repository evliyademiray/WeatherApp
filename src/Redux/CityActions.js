/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_KEY from "../Constants";

export const getData = createAsyncThunk("Hava Durumu", async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${API_KEY}`
  );
  return res;
});

export const getOtherDays = createAsyncThunk("DiğerGünler", async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=${API_KEY}`
  );
  return res;
});
