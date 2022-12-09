import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type GeoSliceState = {
  lat: Number,
  lon: Number,
  ip: String,
  isp: String,
  region: String,
  city: String,
  timezone: String
}

const initialState: GeoSliceState = {
  lat: 0,
  lon: 0,
  ip: "",
  isp: "",
  region: "",
  city: "",
  timezone: ""
};

export const getGeolocation = createAsyncThunk(
  "geo/get",
  async (address, thunkAPI) => {
    try {
      // @ts-ignore
      const res = await fetch(`http://ip-api.com/json/${address}?fields=status,message,regionName,city,lat,lon,timezone,isp,query`);
      const data = await res.json();

      return thunkAPI.fulfillWithValue(data);
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const getInitialGeolocation = createAsyncThunk(
  "geo/getInitial",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://ip-api.com/json");
      const data = await res.json();

      return thunkAPI.fulfillWithValue(data);
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGeolocation.fulfilled, (state, action) => {
        state.lat = action.payload?.lat;
        state.lon = action.payload?.lon;
        state.region = action.payload?.regionName;
        state.city = action.payload?.city;
        state.timezone = action.payload?.timezone;
        state.ip = action.payload?.query;
        state.isp = action.payload?.isp;
      })
      .addCase(getInitialGeolocation.fulfilled, (state, action) => {
        state.lat = action.payload?.lat;
        state.lon = action.payload?.lon;
        state.region = action.payload?.regionName;
        state.city = action.payload?.city;
        state.timezone = action.payload?.timezone;
        state.ip = action.payload?.query;
        state.isp = action.payload?.isp;
      })
  }
});


export default geoSlice.reducer;
