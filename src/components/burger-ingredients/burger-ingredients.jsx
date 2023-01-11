import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import Switcher from "../switcher/switcher";
import Ingredients from "../ingredients/ingredients.jsx";

export default function BurgerIngredients({ open }) {
  return (
    <section className={`${styles.section} mr-10 pt-10`}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <Switcher />
      <Ingredients open={open} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  open: PropTypes.func.isRequired,
};
