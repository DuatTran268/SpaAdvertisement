import { configureStore } from "@reduxjs/toolkit";
import { serviceReducer }from './Reducer'
import { serviceTypeReducer } from "./servicetype/ServiceTypeReducer";

const store = configureStore({
  reducer : {
    serviceFilter: serviceReducer,
    serviceTypeFilter: serviceTypeReducer,
    
  },
});

export default store;