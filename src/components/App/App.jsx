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
    activeModalIngr: false,
    activeModalOrder: false,
    ingridient: {},
    numberOfOrder: "034536",
  });

  const handleEsc = (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  };

  const openModal = (value) => {
    setState({
      ...state,
      activeModalIngr: value ? true : false,
      activeModalOrder: value ? false : true,
      ingridient: { value },
    });
    document.addEventListener("keydown", handleEsc);
  };

  const closeModal = () => {
    setState({
      ...state,
      activeModalIngr: false,
      activeModalOrder: false,
      ingridient: {},
    });
    document.removeEventListener("keydown", handleEsc);
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

  const {
    ingridientsData,
    isLoading,
    ingridient,
    activeModalIngr,
    activeModalOrder,
    numberOfOrder,
  } = state;

  return (
    <div className={stylesApp.app}>
      <AppHeader />
      {isLoading && "loading..."}
      {!isLoading && (
        <Main data={ingridientsData} elements={elems} open={openModal} />
      )}
      <Modal
        active={activeModalIngr ? activeModalIngr : activeModalOrder}
        close={closeModal}
        value={ingridient}
        title={"Детали ингредиента"}
        children={
          ingridient.value ? (
            <IngredientDetails ingrData={ingridient.value} />
          ) : (
            <OrderDetails data={numberOfOrder} />
          )
        }
      />
    </div>
  );
}

export default App;
