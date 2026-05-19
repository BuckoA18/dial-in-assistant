import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {
    dose: "",
    yield: "",
    time: "",
  },
};

export const stepForm = createSlice({
  name: "stepForm",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.currentStep === 4) return;
      state.currentStep += 1;
    },
    decrement: (state) => {
      if (state.currentStep === 1) return;
      state.currentStep -= 1;
    },
  },
});

export const { increment, decrement } = stepForm.actions;
export default stepForm.reducer;
