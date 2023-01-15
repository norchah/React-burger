export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILED = "GET_ITEM_FAILED";

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
        return Promise.reject(`Err ${res.status}`);
      })
      .then((data) => {
        dispatch({
          type: GET_ITEM_SUCCESS,
          items: data.data,
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
