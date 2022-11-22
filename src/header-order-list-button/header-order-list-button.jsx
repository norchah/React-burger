import React from "react";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./button.module.css";

export default function ButtonOrderList(props) {
  return (
    <button className={styles.button} type="button">
      <ListIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive">
        {props.children}
      </p>
    </button>
  );
}
