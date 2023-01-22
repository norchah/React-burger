import React, { useEffect, useMemo } from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";
import Modal from "../modal/modal";
import IngredientDetails from "../modal-ingredient-details/ingridient-details";
import OrderDetails from "../modal-order-details/order-details";
import { isEmpty } from "../../utils/data.js";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/burger-ingredients.js";

function App() {
  const dispatch = useDispatch();

  const {
    ingredients,
    activeModalIngr,
    activeModalOrder,
    details,
    numberOfOrder,
    isLoading,
  } = useSelector((store) => ({
    activeModalIngr: store.start.activeModalIngr,
    activeModalOrder: store.start.activeModalOrder,
    details: store.start.details,
    numberOfOrder: store.start.numberOfOrder,
    isLoading: store.start.isLoading,
    ingredients: store.start.ingredients,
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const main = useMemo(() => {
    return isLoading ? "loading" : <Main />;
  }, [isLoading, ingredients]);

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      {main}
      <Modal active={activeModalIngr} title={"Детали ингредиента"}>
        {isEmpty(details) && <IngredientDetails />}
      </Modal>
      <Modal active={activeModalOrder}>
        <OrderDetails />
      </Modal>
    </div>
  );
}

export default App;
