import { createReducer } from '@reduxjs/toolkit';
import { fetchCities } from '../actions/CitiesActions';

const initialState = {
  citiesData: [],
  status: 'idle',
  error: null,
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCities.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.citiesData = action.payload;
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
});

export default citiesReducer;
