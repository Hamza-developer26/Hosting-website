// store.js
import { configureStore } from '@reduxjs/toolkit';
import expandableTextReducer from './Createslice'; // Adjust the path

const store = configureStore({
  reducer: {
    expandableText: expandableTextReducer,
  },
});

export default store;
