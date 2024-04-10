import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiVersion, BaseUrl } from "../../utils/constrantUrl";
import axios from "axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

export const getSchool = createAsyncThunk(
  "school/getSchool",
  async (data, { rejectWithValue }) => {
    try {
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.get(
        `${BaseUrl}${apiVersion}schools?page=${data}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createVerticalFarm = createAsyncThunk(
  "create/createVerticalFarm",
  async (data, { rejectWithValue }) => {
    try {
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.post(
        `${BaseUrl}${apiVersion}vertical-farms`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const UpdateVerticalFarm = createAsyncThunk(
  "update/UpdateVerticalFarm",
  async (data, { rejectWithValue }) => {
    try {
      let id;
      if (data instanceof FormData) {
        id = data.get("id");
      } else if (data && typeof data === "object") {
        ({ id } = data);
      }
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.post(
        `${BaseUrl}${apiVersion}vertical-farms/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      // Handle errors here if needed
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response);
    }
  }
);

export const createCrop = createAsyncThunk(
  "create/createCrop",
  async (data, { rejectWithValue }) => {
    try {
      const id = data.get("id");
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.post(
        `${BaseUrl}${apiVersion}vertical-farms/${id}/crops`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      // Handle errors here if needed
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response);
    }
  }
);

export const getCrops = createAsyncThunk(
  "crop/getCrops",
  async (id, { rejectWithValue }) => {
    try {
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.get(
        `${BaseUrl}${apiVersion}vertical-farms/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      // Handle errors here if needed
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response);
    }
  }
);


export const createBuilt = createAsyncThunk(
  "create/createBuilt",
  async (data, { rejectWithValue }) => {
    try {
      const id = data.get("id");
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.post(
        `${BaseUrl}${apiVersion}vertical-farms/${id}/builts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response);
    }
  }
);


export const fieldNotes = createAsyncThunk(   //not created extraReducer if any need please create.
  "create/fieldNotes",
  async (data, { rejectWithValue }) => {
    try {
      const id = data.get("id");
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.post(
        `${BaseUrl}${apiVersion}vertical-farms/${id}/field-notes`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response);
    }
  }
);

export const cropPlans = createAsyncThunk(   //not created extraReducer if any need please create.
  "plans/cropPlans",
  async (data, { rejectWithValue }) => {
    try {
      const {id} = data;
      const auth = getUserFromLocalStorage();
      const token = auth?.meta?.access_token;
      const response = await axios.post(
        `${BaseUrl}${apiVersion}vertical-farms/crops/${id}/plans`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response);
    }
  }
);



const initialState = {
  loading: false,
  schools: {},
  error: null,
  mapImg: "",
  verticalFarmData: {},
  cropData: {},
  FramNotes: {},
  builtsRes: {}
};

export const verticalFormSlice = createSlice({
  name: "verticalForm",
  initialState,
  reducers: {
    storeMap: (state, { payload }) => {
      state.mapImg = payload;
    },
    storeFarmNotes: (state, { payload }) => {
      state.FramNotes = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSchool.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSchool.fulfilled, (state, action) => {
      state.loading = false;
      state.schools = action.payload;
      state.error = null;
    });
    builder.addCase(getSchool.rejected, (state, action) => {
      state.loading = false;
      state.schools = null;
      state.error = action?.payload?.source;
    });

    builder.addCase(createVerticalFarm.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createVerticalFarm.fulfilled, (state, action) => {
      state.loading = false;
      state.verticalFarmData = action.payload;
      state.error = null;
    });
    builder.addCase(createVerticalFarm.rejected, (state, action) => {
      state.loading = false;
      state.verticalFarmData = null;
      state.error = action?.payload?.source;
    });

    builder.addCase(createCrop.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCrop.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(createCrop.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload?.source;
    });

    builder.addCase(UpdateVerticalFarm.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateVerticalFarm.fulfilled, (state, action) => {
      state.loading = false;
      state.verticalFarmData = action.payload;
      state.error = null;
    });
    builder.addCase(UpdateVerticalFarm.rejected, (state, action) => {
      state.loading = false;
      state.verticalFarmData = null;
      state.error = action?.payload?.source;
    });

    // storeCropData
    builder.addCase(getCrops.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCrops.fulfilled, (state, action) => {
      state.loading = false;
      state.cropData = action.payload;
      state.error = null;
    });
    builder.addCase(getCrops.rejected, (state, action) => {
      state.loading = false;
      state.cropData = null;
      state.error = action?.payload?.source;
    });

    // storeBuit data response.
    builder.addCase(createBuilt.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBuilt.fulfilled, (state, action) => {
      state.loading = false;
      state.builtsRes = action.payload;
      state.error = null;
    });
    builder.addCase(createBuilt.rejected, (state, action) => {
      state.loading = false;
      state.builtsRes = null;
      state.error = action?.payload?.source;
    });
  },
});

// Action creators are generated for each case reducer function
export const { storeMap, storeFarmNotes } = verticalFormSlice.actions;

export default verticalFormSlice.reducer;
