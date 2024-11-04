import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCityDetails = createAsyncThunk('details/fetchCityDetails', async (id) => {
    const response = await fetch(`http://localhost:8080/api/cities/id/${id}`);
    const data = await response.json();
    return data;
});
