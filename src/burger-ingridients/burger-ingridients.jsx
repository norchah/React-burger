import React from "react";
import styles from './burger-ingridients.module.css';
import Switcher from "../switcher/switcher";
import Ingridients from "../ingridients/ingridients";


export default function BurgerIngridients(props) {
    return (
        <section className={`${styles.section} mr-10 pt-10`}>
          <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
          <Switcher/>
          <Ingridients value={props.value}/>
        </section>
    )
}