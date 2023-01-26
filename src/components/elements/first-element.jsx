import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./list-elements.module.css";

export default function FirstElement(props) {
  const item = props.value;
  return (
    <li key={item._id} className={styles.item}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${item.name} (верх)`}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}
