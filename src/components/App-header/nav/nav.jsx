import React from "react";
import ButtonConstructor from "../button-constructor/button-constructor.jsx";
import ButtonOrderList from "../button-order-list/button-orderr-list.jsx";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <ul className={styles.list}>
      <li className="mr-2">
        <ButtonConstructor>Конструктор</ButtonConstructor>
      </li>
      <li className="">
        <ButtonOrderList>Лента заказов</ButtonOrderList>
      </li>
    </ul>
  );
}
