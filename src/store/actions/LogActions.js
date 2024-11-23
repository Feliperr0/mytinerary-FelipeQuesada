import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción para login
export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
    const credentials = { email, password };
    try {
        const response = await axios.post("http://localhost:8080/api/auth/signin", credentials);
        localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // Rechazar con el mensaje de error del backend
    }
});

// Acción para logout
export const logout = createAsyncThunk("auth/logout", async () => {
    localStorage.removeItem('token'); // Eliminar token de localStorage
});

// Acción para verificar autenticación al cargar la aplicación
export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            // Aquí podrías realizar una solicitud para verificar el token
            // const response = await axios.get("http://localhost:8080/api/auth/checkToken", {
            //     headers: { Authorization: `Bearer ${token}` }
            // });
            // Supongamos que la respuesta es exitosa
            return { user: { email: "storedUser@example.com" }, token }; // Simula un usuario autenticado
        } catch (error) {
            localStorage.removeItem('token');
            return thunkAPI.rejectWithValue("Token inválido");
        }
    } else {
        return thunkAPI.rejectWithValue("No token found");
    }
});
