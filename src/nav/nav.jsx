import React from "react";
import ButtonConstructor from "../header-constructor-button/header-constructor-button";
import ButtonOrderList from "../header-order-list-button/header-order-list-button";
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
