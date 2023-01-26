import React, { useEffect, useMemo } from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";
import Modal from "../modal/modal";
import IngredientDetails from "../modal-ingredient-details/ingridient-details";
import OrderDetails from "../modal-order-details/order-details";
import { isEmpty } from "../../utils/data.js";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/slices/api/get-ingredients";
import { burgerConstructorActions } from "../../services/slices/constructor-slice";

function App() {
  const dispatch = useDispatch();

  const { status, data } = useSelector((store) => ({
    status: store.ingredients.status,
    data: store.ingredients.ingredients,
  }));

  const { ingredientDetails } = useSelector((store) => ({
    ingredientDetails: store.ingredientDetails.ingredientDetails,
  }));

  const { modalIngredient, modalOrder } = useSelector((store) => ({
    modalIngredient: store.modal.modalIngredient,
    modalOrder: store.modal.modalOrder,
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const main = useMemo(() => {
    if (status !== "succes") {
      return "loading...";
    } else {
      console.log(data)
      const bun = data.filter((item) => item.type === "bun");
      
      dispatch(burgerConstructorActions.addBun(bun[0]));
      return <Main />;
    }
  }, [status, data, dispatch]);

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      {main}
      <Modal active={modalIngredient} title={"Детали ингредиента"}>
        {isEmpty(ingredientDetails) && <IngredientDetails />}
      </Modal>
      <Modal active={modalOrder}>
        <OrderDetails />
      </Modal>
    </div>
  );
}

export default App;
