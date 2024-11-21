import { createReducer } from "@reduxjs/toolkit";
import { login } from "../actions/AuthActions";


const initialState = {
    loading: false,
    error: false,
    user: null,
    token: null,
    
}

const authReducer =  createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled,(state, action) => {
        console.log("se ejecuto correctamente")
        console.log(action)
        state.loading = false,
        state.error= false,
        state.user = action.payload.user,
        state.token = action.payload.token

    })
    builder.addCase(login.pending,(state,action) => {
        console.log("se  inicio sign in")
        console.log(action)
        state.loading = true,
        state.error= false,
        state.user = null,
        state.token = null
    })
    builder.addCase(login.rejected, (state, action)=>{
        console.log("error")
        console.log(action)
        state.loading = false,
        state.error= true,
        state.user = null,
        state.token = null
    })
})

export default authReducer