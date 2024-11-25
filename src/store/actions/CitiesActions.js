import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk('GET_CITIES', async ({ searchText, continentFilter }) => {
  const query = new URLSearchParams();

  if (searchText) {
    query.append('city', searchText);
    query.append('country', searchText);
  }

  if (continentFilter.length > 0) {
    continentFilter.forEach(continent => query.append('continent', continent));
  }

  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  const response = await fetch(`http://localhost:8080/api/cities/find?${query.toString()}`, {
    method: 'GET',
    headers: headers
  });

  if (!response.ok) {
    return new Error('Failed to fetch cities');
  }

  const data = await response.json();
  return data.cities;
});
