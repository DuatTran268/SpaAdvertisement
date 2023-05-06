import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: ""
};

const userFilterReducer = createSlice({
  name: "userFilter",
  initialState,
  reducers: {
    reset: (state, action) => {
      return initialState;
    },

    updateFullName: (state, action) => {
      return {
        ...state,
        fullName: action.payload,
      };
    },

    updateEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },

  },
});


export const {
  reset, 
  updateFullName,
  updateEmail
  
} = userFilterReducer.actions;

export const userReducer = userFilterReducer.reducer;

