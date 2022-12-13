import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type GeoSliceState = {
  lat: number;
  lon: number;
  ip: string;
  isp: string;
  region: string;
  timezone: string;
  loading: boolean;
  error: boolean;
};

type FetchedData = {
  latitude: number;
  longitude: number;
  ip_address: string;
  connection: { isp_name: string };
  country: string;
  timezone: { name: string };
  success: string;
};

const initialState: GeoSliceState = {
  lat: 0,
  lon: 0,
  ip: "",
  isp: "",
  region: "",
  timezone: "",
  loading: false,
  error: false,
};

// Yes, I am not keeping my api key in secret (because it's free plan (and I don't have desire to attach backend for this))
export const getGeolocation = createAsyncThunk<FetchedData, string>(
  "geo/get",
  async (address, thunkAPI) => {
    try {
      const res = await fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=07585d0526cd4d68a6ca75f45bd7cb4f&ip_address=${address}`
      );

      if (res.ok) {
        const data = await res.json();
        return data;
      }

      return thunkAPI.rejectWithValue(res.status);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getInitialGeolocation = createAsyncThunk(
  "geo/getInitial",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=07585d0526cd4d68a6ca75f45bd7cb4f"
      );

      if (res.ok) {
        const data = await res.json();
        return data;
      }

      return thunkAPI.rejectWithValue(res.status);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGeolocation.pending, (state) => {
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
      .addCase(getGeolocation.rejected, (state) => {
        state.error = true;
      })
      .addCase(getInitialGeolocation.pending, (state) => {
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
      .addCase(getInitialGeolocation.rejected, (state) => {
        state.error = true;
      });
  },
});

export default geoSlice.reducer;
