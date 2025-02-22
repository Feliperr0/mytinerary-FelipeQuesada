import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk("login", async ({ email, password }) => {
   
    const credentials = {
        email: email,
        password: password
    }
    const response = await axios.post("https://mytinerary-back-felipequesada-production.up.railway.app/api/auth/signin", credentials)

    return response.data
})

export {login}