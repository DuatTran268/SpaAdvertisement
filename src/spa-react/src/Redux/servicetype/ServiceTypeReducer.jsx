import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: ""
};

const serviceTypeFilterReducer = createSlice({
  name: "userFilter",
  initialState,
  reducers: {
    reset: (state, action) => {
      return initialState;
    },

    updateName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },

    updatePrice: (state, action) => {
      return {
        ...state,
        price: action.payload,
      };
    },

  },
});


export const {
  reset, 
  updateName,
  updatePrice
  
} = serviceTypeFilterReducer.actions;

export const serviceTypeReducer = serviceTypeFilterReducer.reducer;

