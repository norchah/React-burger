import { combineReducers } from "redux";
import { burgerIngredientsReducer } from './burger-ingredients.js';
import { modalReducer } from "./modal.js";

export const rootReducer = combineReducers({
    start: burgerIngredientsReducer,
    modal: modalReducer,
})
