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
  const items = useSelector((store) => store.start.ingredients);

  const {
    activeModalIngr,
    activeModalOrder,
    item,
    numberOfOrder,
  } = useSelector((store) => ({
    activeModalIngr: store.modal.activeModalIngr,
    activeModalOrder: store.modal.activeModalOrder,
    item: store.modal.item,
    numberOfOrder: store.modal.numberOfOrder,
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { ingredients, isLoading } = useSelector((store) => ({
    ingredients: store.start.ingredients,
    isLoading: store.start.isLoading,
  }));

  const main = useMemo(() => {
    return isLoading ? "loading" : <Main />;
  }, [isLoading, items]);

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      {main}
      <Modal active={activeModalIngr} title={"Детали ингредиента"}>
        {isEmpty(item) && <IngredientDetails />}
      </Modal>
      <Modal active={activeModalOrder}>
        <OrderDetails data={numberOfOrder} />
      </Modal>
    </div>
  );
}

export default App;