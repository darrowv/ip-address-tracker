import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type GeoSliceState = {
  lat: Number;
  lon: Number;
  ip: String;
  isp: String;
  region: String;
  // city: String;
  timezone: String;
  loading: Boolean;
  error: Boolean;
};

type FetchedData = {
  latitude: Number;
  longitude: Number;
  ip_address: String;
  connection: { isp_name: String };
  country: String;
  // city: String;
  timezone: { name: String };
  success: String;
};

const initialState: GeoSliceState = {
  lat: 0,
  lon: 0,
  ip: "",
  isp: "",
  region: "",
  // city: "",
  timezone: "",
  loading: false,
  error: false,
};

// Yes, I am not keeping my api key in secret (because it's free plan (and I don't have desire to attach backend for this)) 
export const getGeolocation = createAsyncThunk<FetchedData, String>(
  "geo/get",
  async (address, thunkAPI) => {
    try {
      const res = await fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=07585d0526cd4d68a6ca75f45bd7cb4f&ip_address=${address}`
      );

      if(res.ok) {
        const data = await res.json();
        return data;
      }

      return thunkAPI.rejectWithValue(res.status)

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const getInitialGeolocation = createAsyncThunk(
  "geo/getInitial",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=07585d0526cd4d68a6ca75f45bd7cb4f");

      if(res.ok) {
        const data = await res.json();
        return data;
      }

      return thunkAPI.rejectWithValue(res.status)

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGeolocation.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getGeolocation.fulfilled, (state, action) => {
          state.loading = false;
          state.error = false;
          state.lat = action.payload?.latitude;
          state.lon = action.payload?.longitude;
          state.region = action.payload?.country;
          state.timezone = action.payload?.timezone.name;
          state.ip = action.payload?.ip_address;
          state.isp = action.payload?.connection.isp_name;
      })
      .addCase(getGeolocation.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(getInitialGeolocation.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getInitialGeolocation.fulfilled, (state, action) => {
          state.loading = false;
          state.error = false;
          state.lat = action.payload?.latitude;
          state.lon = action.payload?.longitude;
          state.region = action.payload?.country;
          state.timezone = action.payload?.timezone.name;
          state.ip = action.payload?.ip_address;
          state.isp = action.payload?.connection.isp_name;
      })
      .addCase(getInitialGeolocation.rejected, (state, action) => {
        state.error = true;
      })
  },
});

export default geoSlice.reducer;
