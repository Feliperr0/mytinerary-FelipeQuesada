import { createAction, createAsyncThunk} from '@reduxjs/toolkit';

export const setSearchText = createAction('SEARCH_TEXT');
export const setContinentFilter = createAction('SEARCH_CONTINENT');

export const fetchCitiesWithFilters = createAsyncThunk('GET_CITIES_FILTERED', async ({ searchText, continentFilter }) => {
  const query = new URLSearchParams();

  if (searchText) {
    query.append('city', searchText);
    query.append('country', searchText);
  }

  if (continentFilter.length > 0) {
    continentFilter.forEach(continent => query.append('continent', continent));
  }

  const response = await fetch(`https://mytinerary-back-felipequesada-production.up.railway.app/api/cities/find?${query.toString()}`);
  const data = await response.json();
  return data.cities;
});
