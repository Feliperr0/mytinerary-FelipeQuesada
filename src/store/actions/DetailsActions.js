import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCityDetails = createAsyncThunk('GET_CITY_DETAILS', async (id, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.token; // Obtener el token del estado de autenticación

  try {
    const response = await axios.get(`http://localhost:8080/api/cities/id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Incluir el token en los encabezados de la solicitud
      }
    });

    if (response.status !== 200) {
      return rejectWithValue(response.data);
    }

    return response.data;
  } catch (error) {
    return rejectWithValue({ message: 'Network error' });
  }
});
