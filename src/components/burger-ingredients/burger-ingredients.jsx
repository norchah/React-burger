import React from "react";
import styles from "./burger-ingredients.module.css";
import Switcher from "../switcher/switcher";
import Ingredients from "../ingredients/ingredients.jsx";

export default function BurgerIngredients() {
  return (
    <section className={`${styles.section} mr-10 pt-10`}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <Switcher />
      <Ingredients />
    </section>
  );
}