import { createReducer } from "@reduxjs/toolkit";
import { login, logout, checkAuth } from "../actions/LogActions";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    user: null,
    token: null,
    isLoggedIn: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload.message;
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
    builder.addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
});

export default authReducer;
