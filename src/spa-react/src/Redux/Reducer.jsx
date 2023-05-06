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