import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCityDetails = createAsyncThunk('GET_CITY_DETAILS', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:8080/api/cities/id/${id}`);
    if (!response.ok) {
      return rejectWithValue(await response.json());
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue({ message: 'Network error' });
  }
});
