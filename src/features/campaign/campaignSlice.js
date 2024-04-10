import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiVersion, BaseUrl } from "../../utils/constrantUrl";
import axios from "axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";


const initialState = {
  loading: false,
  error: null,
  profileData:{}
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    storeProfile: (state, { payload }) => {
      state.profileData = payload;
    },
  },
  extraReducers: (builder) => {
   
  },
});

// Action creators are generated for each case reducer function
export const { storeProfile } = campaignSlice.actions;

export default campaignSlice.reducer;
