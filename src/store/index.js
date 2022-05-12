import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // something: someFeatureReducer
    // ...
  },
});

export default store;
