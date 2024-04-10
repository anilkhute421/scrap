import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  getUserImageFromLocalStorage,
} from "../../utils/localStorage";
import { apiVersion, BaseUrl } from "../../utils/constrantUrl";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseUrl}${apiVersion}login`, data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseUrl}${apiVersion}register`, data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendOtp = createAsyncThunk(
  "otp/sendOtp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseUrl}${apiVersion}register`, data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: getUserFromLocalStorage(),
  reguser: {},
  avatar: getUserImageFromLocalStorage(),
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      state.user = payload;
      state.error = "";
    },
    regUser: (state, { payload }) => {
      state.reguser = payload;
      state.error = "";
    },
    selectAvatar: (state, { payload }) => {
      state.avatar = payload;
    },
    accessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
  extraReducers: (builder) => {
    // Handle the login data action
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action?.payload?.source;
    });


    // Handle the register data action
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      // state.reguser = action.payload;
      state.error = null;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.reguser = null;
      state.error = action.payload;
    });

    // Handle the otpSend data action
    builder.addCase(sendOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { storeUser, regUser, selectAvatar, accessToken } =
  userSlice.actions;

export default userSlice.reducer;
