import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./list-element.module.css";

function getFirstElement(item) {
  return (
    <li key={item._id}className={styles.item}>
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

function getLastElement(item) {
  return (
    <li key={item._id} className={styles.item}>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${item.name} (низ)`}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}

function getMiddleElement(item) {
  return (
    <li key={item._id} className={styles.itemMiddle}>
      <DragIcon type="primary"/>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}

export default function ListElements(props) {
  return (
    <ul className={styles.list}>
      {props.value.map((item, index) => {
        if (index === 0) {
          return getFirstElement(item);
        } else if (index === props.value.length - 1) {
          return getLastElement(item);
        } else {
          return getMiddleElement(item);
        }
      })}
    </ul>
  );
}
