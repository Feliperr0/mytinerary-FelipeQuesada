import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../context/axiosConfig";

// Acción para login
export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
    const credentials = { email, password };
    try {
        const response = await axiosInstance.post("/auth/signin", credentials);
        localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Guarda los datos del usuario en localStorage
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // Rechazar con el mensaje de error del backend
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
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
        try {
            // Aquí podrías realizar una solicitud para verificar el token
            // const response = await axiosInstance.get("/auth/checkToken", {
            //     headers: { Authorization: `Bearer ${token}` }
            // });
            // Supongamos que la respuesta es exitosa
            return { user, token }; // Cargar los datos del usuario desde localStorage
        } catch (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return thunkAPI.rejectWithValue("Token inválido");
        }
    } else {
        return thunkAPI.rejectWithValue("No token found");
    }
});



export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/users/register', userData);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'Registration failed';
        return thunkAPI.rejectWithValue(errorMessage);
    }
});


