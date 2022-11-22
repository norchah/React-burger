import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button.module.css";

export default function ButtonConstructor(props) {
  return (
    <button className={styles.button} type="button">
      <BurgerIcon type="primary" />
      <p className="text text_type_main-default">{props.children}</p>
    </button>
  );
}
