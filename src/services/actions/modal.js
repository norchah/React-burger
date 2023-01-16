export const OPEN_MODAL_ORDER = "OPEN_MODAL_ORDER";
export const OPEN_MODAL_INGR = "OPEN_MODAL_ORDER_INGR";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GET_NUMBER_REQUEST = "GET_NUMBER_REQUEST";
export const GET_NUMBER_SUCCESS = "GET_NUMBER_SUCCESS";
export const GET_NUMBER_FAILED = "GET_NUMBER_FAILED";
export const ADD_ITEMS_LIST_FROM_CONSTRUCTOR =
  "ADD_ITEMS_LIST_FROM_CONSTRUCTOR";

export function getNumberOfOrder(ingredientsList) {
  return function (dispatch) {
    dispatch({
      type: GET_NUMBER_REQUEST,
    });
    console.log(ingredientsList);
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
          numOfOrder: data.order.number,
          type: GET_NUMBER_SUCCESS,
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
