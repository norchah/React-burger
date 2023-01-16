import {
  OPEN_MODAL_ORDER,
  OPEN_MODAL_INGR,
  CLOSE_MODAL,
  GET_NUMBER_REQUEST,
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILED,
  ADD_ITEMS_LIST_FROM_CONSTRUCTOR,
} from "../actions/modal.js";

const initialState = {
  activeModalIngr: false,
  activeModalOrder: false,
  item: [],
  itemsList: [],
  numberRequest: false,
  numberSucces: false,
  numberFailed: false,
  numberError: "",
  numberOfOrder: "",
  total: "",
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_INGR:
      return {
        ...state,
        activeModalOrder: false,
        activeModalIngr: true,
        item: action.item,
      };
    case OPEN_MODAL_ORDER:
      return {
        ...state,
        itemsList: action.list,
        activeModalOrder: true,
        activeModalIngr: false,
        
      };
    case CLOSE_MODAL:
      return {
        activeModalIngr: false,
        activeModalOrder: false,
      };
    case ADD_ITEMS_LIST_FROM_CONSTRUCTOR:
      return {
        ...state,
        itemsList: action.itemsList,
        total: action.total,
      };
    case GET_NUMBER_REQUEST:
      return {
        ...state,
        numberRequest: true,
        numberFailed: false,
        numberSucces: false,
      };
    case GET_NUMBER_SUCCESS:
      return {
        ...state,
        numberRequest: false,
        numberSucces: true,
        numberFailed: false,
        numberOfOrder: action.numOfOrder,
        activeModalOrder: true,
      };
    case GET_NUMBER_FAILED:
      return {
        ...state,
        activeModalOrder: true,
        numberRequest: false,
        numberSucces: false,
        numberFailed: true,
        numberError: action.error,
      };
    default:
      return state;
  }
}
