import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button.module.css";

export default function ButtonConstructor(props) {
  return (
    <button className={`${styles.button} pl-5  pr-5`} type="button">
      <BurgerIcon type="primary" />
      <p className="text text_type_main-default pl-2">{props.children}</p>
    </button>
  );
}
