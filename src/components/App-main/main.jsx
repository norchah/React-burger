import React from "react";
import styles from "./main.module.css";
import PropTypes from "prop-types";
import { messagePropTypes } from "../../utils/data";
import BurgerIngridients from "../burger-ingridients/burger-ingridients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

export default function Main({ data, elements, openIngr, openOrder }) {
  return (
    <main className={styles.main}>
      <BurgerIngridients value={data} open={openIngr}/>
      <BurgerConstructor value={elements} open={openOrder}/>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.arrayOf(messagePropTypes).isRequired,
  elements: PropTypes.arrayOf(messagePropTypes).isRequired,
  openIngr: PropTypes.func.isRequired,
  openOrder: PropTypes.func.isRequired,
};
