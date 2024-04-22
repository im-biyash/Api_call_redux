import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 export const fetchTodo = createAsyncThunk('fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: null,
    isError: false, // Added isError property
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.data = action.payload; // Corrected property name
        state.isLoading = false; // Added to set isLoading to false when data is fetched
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        console.log('error', action.payload);
        state.isError = true; // Corrected syntax and set isError to true
        state.isLoading = false; // Added to set isLoading to false when error occurs
      });
  },
});


export default todoSlice.reducer;
