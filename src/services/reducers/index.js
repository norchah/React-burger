import { combineReducers } from "redux";
import { burgerIngredientsReducer } from './burger-ingredients.js';
import { modalReducer } from "./modal.js";
import { orderReducer } from "./order.js";

export const rootReducer = combineReducers({
    start: burgerIngredientsReducer,
    modal: modalReducer,
    order: orderReducer,
})
