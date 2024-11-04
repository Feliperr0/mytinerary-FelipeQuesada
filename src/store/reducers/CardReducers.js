import { createReducer } from '@reduxjs/toolkit';
import { toggleDetails } from '../actions/CardActions';

const initialState = {
  details: false,
  loading: true,
};

const cardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleDetails, (state) => {
      state.details = !state.details;
    })
    .addCase('card/toggleLoading', (state, action) => {
      state.loading = action.payload;
    });
});

export default cardReducer;
