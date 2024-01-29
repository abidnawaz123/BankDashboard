import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers";
import userReducer from "./usersSlice";
import cardReducer from "./cardsReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer,
    cards: cardReducer,
})
export default rootReducer;