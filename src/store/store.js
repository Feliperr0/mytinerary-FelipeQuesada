import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/CitiesReducers';
import detailsReducer from './reducers/DetailsReducer';
import cardReducer from './reducers/CardReducers';
import filtersReducer from './reducers/FiltersReducers';
import authReducer from './reducers/AuthReducer'; // Asegúrate de que esta ruta es correcta

const store = configureStore({
    reducer: {
        cities: citiesReducer,
        details: detailsReducer,
        card: cardReducer,
        filters: filtersReducer,
        auth: authReducer, // El nombre del estado es 'auth'
    },
});

export default store;
