import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/LogActions";

const initialState = {
    loading: false,
    error: false,
    user: null,
    token: null,
    isLoggedIn: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        console.log("Login exitoso");
        console.log(action);
        state.loading = false;
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(login.pending, (state, action) => {
        console.log("Inicio de sesión en progreso");
        state.loading = true;
        state.error = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(login.rejected, (state, action) => {
        console.log("Error en el inicio de sesión");
        console.log(action);
        state.loading = false;
        state.error = true;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
});

export default authReducer;
