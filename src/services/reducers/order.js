import { ADD_ITEMS_LIST_FROM_CONSTRUCTOR } from "../actions/order";

const initialState = {
  orderList: [],
  idsList: [],
  totalPrice: "",
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS_LIST_FROM_CONSTRUCTOR:
      return {
        ...state,
        idsList: action.itemsList,
        totalPrice: action.total,
      };
    default:
      return state;
  }
}
