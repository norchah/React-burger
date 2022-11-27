import React from "react";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./account.module.css";

export default function Account(props) {
  return (
    <button className={`${styles.button} pl-5 pr-5`} type="button">
      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive pl-2">
        {props.children}
      </p>
    </button>
  );
}
