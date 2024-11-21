import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/LogActions";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null, // Añadir campo para el mensaje de error
    user: null,
    token: null,
    isLoggedIn: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        console.log("Login exitoso");
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(login.pending, (state) => {
        console.log("Inicio de sesión en progreso");
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(login.rejected, (state, action) => {
        console.log("Error en el inicio de sesión");
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload.message; // Almacenar el mensaje de error del backend
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
});

export default authReducer;
