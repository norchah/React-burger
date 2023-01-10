import React from "react";
import styles from "./main.module.css";
import PropTypes from "prop-types";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

export default function Main({ openIngr, openOrder }) {
  return (
    <main className={styles.main}>
      <BurgerIngredients open={openIngr} />
      <BurgerConstructor open={openOrder}/>
    </main>
  );
}

Main.propTypes = {
  openIngr: PropTypes.func.isRequired,
  openOrder: PropTypes.func.isRequired,
};
