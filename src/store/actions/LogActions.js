import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axiosInstance from "../../context/axiosConfig";

// Acción para login
export const login = createAsyncThunk("login", async ({ email, password }) => {
    const credentials = {
        email: email,
        password: password
    };

    const response = await axiosInstance.post("http://localhost:8080/api/auth/signin/", credentials);
    console.log("se proceso la solicitud")
    console.log("response", response)

    localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
    localStorage.setItem('user', JSON.stringify(response.data.user)); // Guarda los datos del usuario en localStorage
    return response.data;

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
        // Aquí suponemos que el backend redirige a una ruta con el token y los datos del usuario.
        const { token, user } = response.data; // Ajusta esto según tu backend
        localStorage.setItem('token', token); // Guarda el token en localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Guarda los datos del usuario en localStorage
        return { token, user };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Google login failed';
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

// Acción para login con token devuelto por Google
export const loginWithToken = createAsyncThunk("auth/loginWithToken", async ({ token, user }, thunkAPI) => {
    try {
        localStorage.setItem('token', token); // Guarda el token en localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Guarda los datos del usuario en localStorage
        return { token, user };
    } catch (error) {
        return thunkAPI.rejectWithValue("Error storing token");
    }
});

// Acción para establecer el usuario manualmente
export const setUser = createAction("auth/setUser", (data)=>{
    return {
        payload: data,
        
    }
})
