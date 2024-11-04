import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  details: false,
  loading: true,
};

const cardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('TOGGLE_DETAILS', (state) => {
      state.details = !state.details;
    })
    .addCase('TOGGLE_LOADING', (state, action) => {
      state.loading = action.payload;
    });
});

export default cardReducer;
