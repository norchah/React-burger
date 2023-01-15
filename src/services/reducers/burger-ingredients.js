import { isTemplateSpan } from "typescript";
import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
} from "../actions/burger-ingredients.js";

const initialState = {
  ingredients: [],
  isloading: true,
  isError: false,
  error: "",
};

export function burgerIngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        ingredients: action.items,
      };
    case GET_ITEM_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
