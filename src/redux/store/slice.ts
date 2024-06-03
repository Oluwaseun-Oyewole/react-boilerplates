import { createSlice } from "@reduxjs/toolkit";
import { TodoSlice as api } from "./query";

const initialState = {
  posts: [],
  loading: false,
};

const jobSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getAllTodos.matchPending, (state) => {
      state.loading = true;
    });
    builder.addMatcher(
      api.endpoints.getAllTodos.matchFulfilled,
      (state, action) => {
        state.loading = false;
        state.posts = action.payload?.data;
      },
    );
    builder.addMatcher(api.endpoints.getAllTodos.matchRejected, (state) => {
      state.loading = false;
    });
  },
});

export default jobSlice.reducer;
