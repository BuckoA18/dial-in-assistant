import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const stepCounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value === 4) return;
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 1) return;
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = stepCounterSlice.actions;
export default stepCounterSlice.reducer;
