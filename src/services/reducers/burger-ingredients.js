import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
  INCREASE_ITEM,
  DECREASE_ITEM,
  CLEAR_BUN_COUNT,
  ADD_INGREDIENT,
  DEL_INGREDIENT,
  ADD_BUN,
  DEL_BUNS,
  OPEN_MODAL_ORDER,
  OPEN_MODAL_INGR,
  CLOSE_MODAL,
  GET_NUMBER_REQUEST,
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILED,
  ADD_TOTAL,
  SWITCH_CURRENT_TAB,
  MOVE_ITEM,
} from "../actions/burger-ingredients.js";

const initialState = {
  ingredients: [],
  constructor: [],
  bun: [],
  details: [],
  orderList: [],
  totalPrice: 0,

  isloading: true,
  isError: false,
  error: "",

  activeModalIngr: false,
  activeModalOrder: false,
  numberRequest: false,
  numberSucces: false,
  numberFailed: false,
  numberError: "",
  numberOfOrder: "",

  currentTab: "bun",
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
        bun: action.starterBun,
      };
    case GET_ITEM_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.error,
      };
    case DECREASE_ITEM:
      return {
        ...state,
        ingredients: [...state.ingredients].map((item) =>
          item._id === action._id ? { ...item, __v: --item.__v } : item
        ),
      };
    case INCREASE_ITEM:
      return {
        ...state,
        ingredients: [...state.ingredients].map((item) =>
          item._id === action._id ? { ...item, __v: ++item.__v } : item
        ),
      };
    case CLEAR_BUN_COUNT:
      return {
        ...state,
        ingredients: [...state.ingredients].map((item) =>
          item.type === "bun" ? { ...item, __v: 0 } : item
        ),
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        constructor: [
          ...state.constructor,
          ...state.ingredients.filter((item) => item._id === action._id),
        ],
      };
    case DEL_INGREDIENT:
      const arrWithoutEl = [
        ...state.constructor.splice(
          [...state.constructor].findIndex((item) => item._id === action._id),
          1
        ),
      ];
      return {
        ...state,
        arrWithoutEl,
        totalPrice: state.totalPrice - arrWithoutEl[0].price,
      };
    case ADD_BUN:
      return {
        ...state,
        bun: [
          ...state.bun,
          ...state.ingredients.filter((item) => item._id === action._id),
        ],
      };
    case DEL_BUNS:
      return {
        ...state,
        bun: [],
      };
    case OPEN_MODAL_INGR:
      return {
        ...state,
        activeModalOrder: false,
        activeModalIngr: true,
        details: action.item,
      };
    case OPEN_MODAL_ORDER:
      return {
        ...state,
        activeModalOrder: true,
        activeModalIngr: false,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        activeModalIngr: false,
        activeModalOrder: false,
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
    case ADD_TOTAL:
      return {
        ...state,
        orderList: action.orderList,
        totalPrice: action.totalPrice,
      };
    case SWITCH_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.current,
      };
    case MOVE_ITEM:
      const arr = [...state.constructor]
      const dragElement = arr[action.drag];
      const hoverElement = arr[action.hover];
      arr.splice(action.hover, 1, dragElement);
      arr.splice(action.drag, 1, hoverElement);
      
      return {
        ...state,
        constructor: arr,
      };
    default:
      return state;
  }
}
