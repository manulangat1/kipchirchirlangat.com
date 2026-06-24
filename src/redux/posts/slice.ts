import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAPIService } from "./service";
interface intialStateInterface {
  posts: any;
  post: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: intialStateInterface = {
  posts: null,
  post: null,
  isLoading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return await postAPIService.getPosts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        "Unable to load blog posts.";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPostsByIdSlice = createAsyncThunk(
  "posts/getAllById",
  async (id: string, thunkAPI) => {
    try {
      return await postAPIService.getPostsById(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        "Unable to load this blog post.";

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
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = null;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Unable to load blog posts.";
      })
      .addCase(getPostsByIdSlice.pending, (state) => {
        state.isLoading = true;
        state.post = null;
        state.error = null;
      })
      .addCase(getPostsByIdSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
        state.error = null;
      })
      .addCase(getPostsByIdSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.post = null;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Unable to load this blog post.";
      });
  },
});

export default postSlice.reducer;
