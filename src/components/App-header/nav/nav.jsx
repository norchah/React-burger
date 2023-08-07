import React from "react";
import LinkConstructor from "../link-constructor/link-constructor.jsx";
import LinkOrderList from "../link-order-list/link-orderr-list.jsx";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <ul className={styles.list}>
      <li className="mr-2">
        <LinkConstructor>Конструктор</LinkConstructor>
      </li>
      <li className="">
        <LinkOrderList>Лента заказов</LinkOrderList>
      </li>
    </ul>
  );
}
