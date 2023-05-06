import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  phoneNumber: ""
};

const supportFilterReducer = createSlice({
  name: "supportFilter",
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

    updatePhoneNumber: (state, action) => {
      return {
        ...state,
        phoneNumber: action.payload,
      };
    },

  },
});


export const {
  reset, 
  updateFullName,
  updatePhoneNumber
  
} = supportFilterReducer.actions;

export const supportReducer = supportFilterReducer.reducer;

