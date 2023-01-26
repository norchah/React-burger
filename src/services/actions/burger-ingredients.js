export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILED = "GET_ITEM_FAILED";

export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const CLEAR_BUN_COUNT = "CLEAR_BUN_COUNT";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DEL_INGREDIENT = "DEL_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const DEL_BUNS = "DEL_BUNS";

export const OPEN_MODAL_ORDER = "OPEN_MODAL_ORDER";
export const OPEN_MODAL_INGR = "OPEN_MODAL_ORDER_INGR";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const GET_NUMBER_REQUEST = "GET_NUMBER_REQUEST";
export const GET_NUMBER_SUCCESS = "GET_NUMBER_SUCCESS";
export const GET_NUMBER_FAILED = "GET_NUMBER_FAILED";

export const ADD_TOTAL = "ADD_TOTAL";

export const SWITCH_CURRENT_TAB = 'SWITCH_CURRENT_TAB';
export const MOVE_ITEM = 'MOVE_ITEM';

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEM_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error ${res.status}`);
      })
      .then((data) => {
        dispatch({
          type: GET_ITEM_SUCCESS,
          items: data.data,
          starterBun: [data.data[0]],
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEM_FAILED,
          error: err,
        });
      });
  };
}

export function getNumberOfOrder(ingredientsList) {
  return function (dispatch) {
    dispatch({
      type: GET_NUMBER_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsList,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Err ${res.status}`);
      })
      .then((data) => {
        dispatch({
          type: GET_NUMBER_SUCCESS,
          numOfOrder: data.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_NUMBER_FAILED,
          error: err,
        });
      });
  };
}
