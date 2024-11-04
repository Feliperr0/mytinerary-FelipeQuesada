import { createReducer } from '@reduxjs/toolkit';
import { setSearchText, setContinentFilter } from '../actions/FiltersActions';

const initialState = {
  searchText: '',
  continentFilter: [],
};

const filtersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchText, (state, action) => {
      state.searchText = action.payload;
    })
    .addCase(setContinentFilter, (state, action) => {
      const { value, checked } = action.payload;
      if (checked) {
        state.continentFilter.push(value);
      } else {
        state.continentFilter = state.continentFilter.filter(continent => continent !== value);
      }
    });
});

export default filtersReducer;
