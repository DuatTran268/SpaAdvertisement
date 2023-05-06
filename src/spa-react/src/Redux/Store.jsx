import { configureStore } from "@reduxjs/toolkit";
import { serviceReducer }from './Reducer'

const store = configureStore({
  reducer : {
    serviceFilter: serviceReducer,
  },
});

export default store;