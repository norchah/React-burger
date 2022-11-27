import React from "react";
import styles from "./main.module.css";
import BurgerIngridients from "../burger-ingridients/burger-ingridients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

export default function Main(props) {
  return (
    <main className={styles.main}>
      <BurgerIngridients value={props.data} />
      <BurgerConstructor value={props.elements}/>
    </main>
  );
}
