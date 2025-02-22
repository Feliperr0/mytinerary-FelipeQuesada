import { createReducer } from "@reduxjs/toolkit";
import { login, logout, checkAuth, register, loginWithGoogle, loginWithToken, setUser, clearError } from "../actions/LogActions";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    successMessage: null,
    user: null,
    token: null,
    isLoggedIn: false
};

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
 
       
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(login.pending, (state) => {

       
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(login.rejected, (state, action) => {
     
      
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
     
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    // Agregar casos para el registro
    builder.addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = action.payload.message;
    });
    builder.addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
    });
    builder.addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
    });
    // Agregar casos para login con Google
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });

    // Agregar casos para login con token
    builder.addCase(loginWithToken.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });
    builder.addCase(loginWithToken.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    builder.addCase(loginWithToken.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.successMessage = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
    });
    // Agregar caso para setUser
    builder.addCase(setUser, (state, action) => {
  
        
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    });

    // Agregar caso para clearError
    builder.addCase(clearError, (state) => {
        state.errorMessage = null; // Limpiar los mensajes de error
    });
});

export default authReducer;
