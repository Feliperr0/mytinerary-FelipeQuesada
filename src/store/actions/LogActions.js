import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axiosInstance from "../../context/axiosConfig";

// Acción para login
export const login = createAsyncThunk("login", async ({ email, password }, { rejectWithValue }) => {
    const credentials = {
        email: email,
        password: password
    };

    try {
        const response = await axiosInstance.post("https://mytinerary-back-felipequesada-production.up.railway.app/api/auth/signin/", credentials);
   

        localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Guarda los datos del usuario en localStorage
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message); // Capturar el mensaje de error desde la API
        } else {
            return rejectWithValue(error);
        }
    }
});

// Acción para logout
export const logout = createAsyncThunk("auth/logout", async () => {
    localStorage.removeItem('token'); // Eliminar token de localStorage
    localStorage.removeItem('user'); // Eliminar datos del usuario de localStorage
});

// Acción para verificar autenticación al cargar la aplicación
export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, thunkAPI) => {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            return { token }; // Cargar los datos del usuario desde localStorage
        } catch (error) {
            localStorage.removeItem('token');

            return thunkAPI.rejectWithValue("Token inválido");
        }
    } else {
        return thunkAPI.rejectWithValue(null);
    }
});

// Acción para registro
export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/users/register', userData);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'Registration failed';
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

// Acción para login con Google
export const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/auth/signin/google'); // Verifica si esta URL es correcta según tu configuración de backend
       
        const { token, user } = response.data; // Ajusta esto según tu backend
        localStorage.setItem('token', token); // Guarda el token en localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Guarda los datos del usuario en localStorage
        return { token, user };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Google login failed';
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

// login con token devuelto por Google
export const loginWithToken = createAsyncThunk("auth/loginWithToken", async ({ token }, thunkAPI) => {
    try {
        localStorage.setItem('token', token); // Guarda el token en localStorage
        // Guarda los datos del usuario en localStorage
        return { token };
    } catch (error) {
        return thunkAPI.rejectWithValue("Error storing token");
    }
});

// establecer el usuario manualmente
export const setUser = createAction("auth/setUser", (data) => {
    return {
        payload: data,
    }
})

// limpiar mensajes de error
export const clearError = createAction("auth/clearError");







