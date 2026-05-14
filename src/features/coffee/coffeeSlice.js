import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCoffee: null,
};

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    setActiveCoffee: (state, action) => {
      state.activeCoffee = action.payload;
    },
  },
});

export const { setActiveCoffee } = coffeeSlice.actions;
export default coffeeSlice.reducer;
