import { createSlice } from "@reduxjs/toolkit";
import { fetchCardsData } from "../layout/pages/credit-cards/Add-Card/redux/fetchCard";

const initialState = {
    card: [],
    cardLoading: false,
    error: null
}
const cardsSlice = createSlice({
    name: 'CardsList',
    initialState,
    reducers: {
        cardsList: (state, action) => {
            state.card.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCardsData.pending, (state) => {
            state.cardLoading = true
        })
            .addCase(fetchCardsData.fulfilled, (state, action) => {
                state.cardLoading = false;
                state.card = action.payload;
            })
            .addCase(fetchCardsData.rejected, (state, action) => {
                state.cardLoading = false;
                state.error = action.error.message;
            })
    }
})

export const { cardsList } = cardsSlice.actions;
export default cardsSlice.reducer;