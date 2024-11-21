
import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/CitiesReducers.js';
import detailsReducer from './reducers/DetailsReducer.js';
import cardReducer from './reducers/CardReducers.js';
import filtersReducer from './reducers/FiltersReducers.js';
import authReducer from './reducers/authReducer.js';

const store = configureStore({
    reducer: {
        cities: citiesReducer,
        details: detailsReducer,
        card: cardReducer,
        filters: filtersReducer,
        auth: authReducer,
    },

});

export default store;
