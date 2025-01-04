import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Create a Redux store holding the state of the counter
const store = configureStore({
  reducer: counterReducer,
});

export default store;
