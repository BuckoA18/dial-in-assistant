import { configureStore } from "@reduxjs/toolkit";
import stepCounterReducer from "./features/stepForm/stepCounterSlice";
import coffeeReducer from "./features/coffee/coffeeSlice";
export const store = configureStore({
  reducer: {
    counter: stepCounterReducer,
    coffee: coffeeReducer,
  },
});
