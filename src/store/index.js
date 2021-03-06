import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
      state.showCounter=true;
    },
    decrement(state) {
      state.counter--;
      state.showCounter=true;
    },
    increase(state, action) {
      state.counter += action.payload;
      state.showCounter=true;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});



const store = configureStore({ reducer: counterSlice.reducer });

export const counterAction= counterSlice.actions;

export default store;
