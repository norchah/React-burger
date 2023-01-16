import React from "react";
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

export default function Main() {
  return (
    <main className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
}