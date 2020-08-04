import { configureStore } from '@reduxjs/toolkit';
import testSlice from "../testSlice";

export default configureStore({
  reducer: {
    testingSomething:testSlice,
  },
});
