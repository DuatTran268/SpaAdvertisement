import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  fullName: "",
  phoneNumber: "",
  email: "",
};

const filterSpa = createSlice({
  name: "filterSpa",
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

    updateEmail: (state, action) => {
      return {
        ...state,
        month: action.payload,
      };
    },

  },
});


export const {
  reset, 
  updateName,
  updateFullName,
  updateEmail,
  updatePhoneNumber
  
} = filterSpa.actions;

export const reducer = filterSpa.reducer;


// return {
//   ...state,keyword:action.payload.keyword
// };


// // tag
// const initialStateTag = {
//   name: "",
// }

// const tagsFilterReduce = createSlice({
//   name: "tagsFilter",
//   initialStateTag,
//   reducers :{
//     resetTag: (state, action) => {
//       return initialStateTag;
//     },

//     updateName: (state, action) => {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     },
//   }
// })

// export const {
//   resetTag,
//   updateName
// } = tagsFilterReduce.actions;
// export const reducerTag = tagsFilterReduce.reducer;