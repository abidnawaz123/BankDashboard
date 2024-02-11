import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCardsData = createAsyncThunk(
    "user/fetchUserCards",
    async (token) => {
        const response = await axios.get("http://localhost:4000/api/card",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            },
        )
        return response.data;
    }
)