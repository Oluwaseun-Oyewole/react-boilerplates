import { createSlice } from '@reduxjs/toolkit';
import { TodoSlice as api } from './query';

const initialState = {
  todos: [],
  loading: false,
};

const jobSlice = createSlice({
  name: 'allJobs',
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
        state.todos = action.payload;
      },
    );
    builder.addMatcher(api.endpoints.getAllTodos.matchRejected, (state) => {
      state.loading = false;
    });
  },
});

export default jobSlice.reducer;
