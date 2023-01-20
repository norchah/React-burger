import { combineReducers } from "redux";
import { burgerIngredientsReducer } from './burger-ingredients.js';

export const rootReducer = combineReducers({
    start: burgerIngredientsReducer,
})
