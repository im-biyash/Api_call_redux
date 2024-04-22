
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todo"; 

// Importing default export

export default configureStore({
  reducer: {
    todo: todoReducer,
  }
});
