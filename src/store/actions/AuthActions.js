import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("login", async ({ email, password }) => {
    console.log("hicimos login")
    const credentials = {
        email: email,
        password: password
    }
    const response = await axios.post("http://localhost:8080/api/auth/signin", credentials)
    console.log("se produjo la solicitud")
    console.log("response", response.data)
    return response.data
})

export {login}