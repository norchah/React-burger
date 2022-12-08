import React from "react";
import PropTypes from "prop-types";
import styles from './burger-ingridients.module.css';
import Switcher from "../switcher/switcher";
import Ingridients from "../ingridients/ingridients.jsx";
import { messagePropTypes } from "../../utils/data";


export default function BurgerIngridients({value, open}) {
    return (
        <section className={`${styles.section} mr-10 pt-10`}>
          <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
          <Switcher/>
          <Ingridients value={value} open={open}/>
        </section>
    )
}

BurgerIngridients.propTypes = {
  value: PropTypes.arrayOf(messagePropTypes).isRequired
};