import { createReducer } from '@reduxjs/toolkit';
import { fetchCityDetails } from '../actions/DetailsActions';

const initialState = {
  city: null,
  loading: false,
  error: false,
  errorMessage: '',
};

const detailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCityDetails.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = '';
    })
    .addCase(fetchCityDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload;
    })
    .addCase(fetchCityDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload?.message || 'Error';
    });
});

export default detailsReducer;
