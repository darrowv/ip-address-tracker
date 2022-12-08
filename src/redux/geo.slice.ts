import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type GeoSliceState = {
  lat: Number,
  lng: Number,
  ip: String,
  isp: String,
  region: String,
  city: String,
  timezone: String
}

const initialState: GeoSliceState = {
  lat: 0,
  lng: 0,
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
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Ldp5Zb6sg2ERVHaK7f3eDVRq5sH1z&${Number(address.split(".").join("")) ? `ipAddress=${address}` : `domain=${address}`}`);
      const { location, ip, isp } = await res.json();

      return thunkAPI.fulfillWithValue({ location, ip, isp });
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

export const getInitialGeolocation = createAsyncThunk(
  "geo/getInitial",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_Ldp5Zb6sg2ERVHaK7f3eDVRq5sH1z");
      const { location, ip, isp } = await res.json();

      return thunkAPI.fulfillWithValue({ location, ip, isp });
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
        state.lat = action.payload?.location.lat;
        state.lng = action.payload?.location.lng;
        state.region = action.payload?.location.region;
        state.city = action.payload?.location.city;
        state.timezone = action.payload?.location.timezone;
        state.ip = action.payload?.ip;
        state.isp = action.payload?.isp;
      })
      .addCase(getInitialGeolocation.fulfilled, (state, action) => {
        state.lat = action.payload?.location.lat;
        state.lng = action.payload?.location.lng;
        state.region = action.payload?.location.region;
        state.city = action.payload?.location.city;
        state.timezone = action.payload?.location.timezone;
        state.ip = action.payload?.ip;
        state.isp = action.payload?.isp;
      })
  }
});


export default geoSlice.reducer;
