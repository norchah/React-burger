import { configureStore } from "@reduxjs/toolkit";
import { ingredientDetailsReducer } from "./ingridient-details-slice";
import { ingredientsReducer } from "./ingredients-slice";
import { modalReducer } from "./modal-slice";
import { burgerConstructorReducer } from "./constructor-slice";
import { switcherReducer } from "./swither-slice";

export const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsReducer,
    ingredients: ingredientsReducer,
    modal: modalReducer,
    burgerConstructor: burgerConstructorReducer,
    switcher: switcherReducer,
  },
});
