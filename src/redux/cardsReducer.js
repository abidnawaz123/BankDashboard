import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'CardsList',
    initialState: [],
    reducers: {
        cardsList: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { cardsList } = cardsSlice.actions;
export default cardsSlice.reducer;