import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const serviceFilterReducer = createSlice({
  name: "serviceFilter",
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

  },
});


export const {
  reset, 
  updateName,
  
} = serviceFilterReducer.actions;

export const serviceReducer = serviceFilterReducer.reducer;

