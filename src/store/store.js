import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/CitiesReducers.js';
import DetailsReducer from './reducers/DetailsReducer.js';
import cardReducer from './reducers/CardReducers.js';
import filtersReducer from './reducers/FiltersReducers.js';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    details: DetailsReducer,
    card: cardReducer,
    filters: filtersReducer,
  },
});

export default store;
