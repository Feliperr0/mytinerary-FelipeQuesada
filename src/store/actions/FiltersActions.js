import { createAction, createAsyncThunk} from '@reduxjs/toolkit';

export const setSearchText = createAction('filters/setSearchText');
export const setContinentFilter = createAction('filters/setContinentFilter');

export const fetchCitiesWithFilters = createAsyncThunk('cities/fetchCitiesWithFilters', async ({ searchText, continentFilter }) => {
  const query = new URLSearchParams();

  if (searchText) {
    query.append('city', searchText);
    query.append('country', searchText);
  }

  if (continentFilter.length > 0) {
    continentFilter.forEach(continent => query.append('continent', continent));
  }

  const response = await fetch(`http://localhost:8080/api/cities/find?${query.toString()}`);
  const data = await response.json();
  return data.cities;
});
