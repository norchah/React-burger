import React, { useState, useEffect, useMemo, useContext } from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";
import Modal from "../modal/modal";
import IngredientDetails from "../modal-ingredient-details/ingridient-details";
import OrderDetails from "../modal-order-details/order-details";
import { BurgerContext } from "../../services/burger-context";

function App() {
  const [burgerState, setBurgerState] = useState({
    isLoading: true,
    ingredients: [],
  });

  const [modal, setModal] = useState({
    activeModalIngr: false,
    activeModalOrder: false,
    ingredient: {},
    numberOfOrder: "034536",
  });

  const openModalIngr = (value) => {
    setModal({
      ...modal,
      activeModalIngr: true,
      ingredient: { value },
    });
  };

  const openModalOrder = (ingredients) => {
    fetch('https://norma.nomoreparties.space/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'ingredients': ingredients
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Err ${res.status}`);
    })
    .then((data) => {
      setModal({
        ...modal,
        numberOfOrder: data.order.number,
        activeModalOrder: true,
      });
    })
    .catch((err) => {
      console.log(err)
      setModal({
        ...modal,
        numberOfOrder: 'error',
        activeModalOrder: true,
      })
    });
  };

  const closeModal = () => {
    setModal({
      ...modal,
      activeModalIngr: false,
      activeModalOrder: false,
      ingredient: {},
    });
  };

  const isEmpty = (obj) => {
    for (let key in obj) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setBurgerState({ isLoading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Err ${res.status}`);
      })
      .then((data) => {
        setBurgerState({ isLoading: false, ingredients: data.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const { ingredients, isLoading } = burgerState;

  const main = useMemo(() => {
    return isLoading ? (
      "loading"
    ) : (
      <Main openIngr={openModalIngr} openOrder={openModalOrder} />
    );
  }, [isLoading, ingredients]);

  const { ingredient, activeModalIngr, activeModalOrder, numberOfOrder } =
    modal;

  return (
    <div className={stylesApp.app}>
      <AppHeader />

      {isLoading && "loading..."}
      {!isLoading && (
        <BurgerContext.Provider value={{ burgerState, setBurgerState }}>
          {main}
        </BurgerContext.Provider>
      )}
      <Modal
        active={activeModalIngr}
        close={closeModal}
        title={"Детали ингредиента"}
      >
        {isEmpty(ingredient) && (
          <IngredientDetails ingrData={ingredient.value} />
        )}
      </Modal>
      <Modal active={activeModalOrder} close={closeModal}>
        <OrderDetails data={numberOfOrder} />
      </Modal>
    </div>
  );
}

export default App;
