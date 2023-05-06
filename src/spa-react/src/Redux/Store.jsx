import { configureStore } from "@reduxjs/toolkit";
import { serviceReducer }from './Reducer'
import { serviceTypeReducer } from "./servicetype/ServiceTypeReducer";
import { userReducer } from "./user/UserReducer";

const store = configureStore({
  reducer : {
    serviceFilter: serviceReducer,
    serviceTypeFilter: serviceTypeReducer,
    userFilter: userReducer,
    
  },
});

export default store;