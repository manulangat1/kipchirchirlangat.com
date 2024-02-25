import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAPIService } from "./service";
interface intialStateInterface {
  posts: any;
  post: any;
  isLoading: boolean;
}

const initialState: intialStateInterface = {
  posts: null,
  post: null,
  isLoading: false,
};

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return postAPIService.getPosts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPostsByIdSlice = createAsyncThunk(
  "posts/getAllById",
  async (id: string, thunkAPI) => {
    try {
      return postAPIService.getPostsById(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.posts = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsByIdSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsByIdSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPostsByIdSlice.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default postSlice.reducer;
