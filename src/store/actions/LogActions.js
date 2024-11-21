import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción para login
export const login = createAsyncThunk("auth/login", async ({ email, password }, thunkAPI) => {
    const credentials = { email, password };
    try {
        console.log("Haciendo solicitud al backend");
        const response = await axios.post("http://localhost:8080/api/auth/signin", credentials);
        localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
        console.log("Solicitud exitosa, token guardado");
        return response.data;
    } catch (error) {
        console.error("Error en la solicitud", error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Acción para logout
export const logout = createAsyncThunk("auth/logout", async () => {
    localStorage.removeItem('token'); // Eliminar token de localStorage
});

// Acción para verificar autenticación al cargar la aplicación
export const checkAuth = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        dispatch(login.fulfilled({ user: { email: "storedUser@example.com" }, token })); // Simula un usuario autenticado
    } else {
        dispatch(logout());
    }
};
