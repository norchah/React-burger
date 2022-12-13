import React, { useState, useEffect } from "react";
import stylesApp from "./app.module.css";
import { elems } from "../../utils/data";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";
import Modal from "../modal/modal";
import IngredientDetails from "../modal-ingridient-details/ingridient-details";
import OrderDetails from "../modal-order-details/order-details";

function App() {
  const [state, setState] = useState({
    isLoading: false,
    ingridientsData: [],
  });

  const [modal, setModal] = useState({
    activeModalIngr: false,
    activeModalOrder: false,
    ingridient: {},
    numberOfOrder: "034536",
  });

  const openModalIngr = (value) => {
    setModal({
      ...modal,
      activeModalIngr: true,
      ingridient: { value },
    });
  };

  const openModalOrder = () => {
    setModal({
      ...modal,
      activeModalOrder: true,
    });
  };

  const closeModal = () => {
    setModal({
      ...modal,
      activeModalIngr: false,
      activeModalOrder: false,
      ingridient: {},
    });
  };

  const isEmpty = (obj) => {
    for (let key in obj) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setState({ ...state, isLoading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Err ${res.status}`);
      })
      .then((data) => {
        setState({ ...state, isLoading: false, ingridientsData: data.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const { ingridientsData, isLoading } = state;

  const { ingridient, activeModalIngr, activeModalOrder, numberOfOrder } =
    modal;

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      {isLoading && "loading..."}
      {!isLoading && (
        <Main
          data={ingridientsData}
          elements={elems}
          openIngr={openModalIngr}
          openOrder={openModalOrder}
        />
      )}
      <Modal
        active={activeModalIngr}
        close={closeModal}
        title={"Детали ингредиента"}
      >
        {isEmpty(ingridient) && (
          <IngredientDetails ingrData={ingridient.value} />
        )}
      </Modal>
      <Modal active={activeModalOrder} close={closeModal}>
        <OrderDetails data={numberOfOrder} />
      </Modal>
    </div>
  );
}

export default App;
