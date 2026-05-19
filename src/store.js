import { configureStore } from "@reduxjs/toolkit";
import stepFormReducer from "./features/stepForm/stepFormSlice";
import coffeeReducer from "./features/coffee/coffeeSlice";
export const store = configureStore({
  reducer: {
    stepForm: stepFormReducer,
    coffee: coffeeReducer,
  },
});
