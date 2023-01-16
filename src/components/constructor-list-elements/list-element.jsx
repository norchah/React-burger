import React, { useEffect } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./list-element.module.css";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEMS_LIST_FROM_CONSTRUCTOR } from "../../services/actions/modal";

export default function ListElements() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.start.ingredients);

  const firstBun = items.find((item) => item.type === "bun");

  useEffect(() => {
    let total = firstBun.price * 2;
    let ingredientsIdTemp = [firstBun._id];
    items.map((item) => {
      if (item.type !== "bun") {
        total += item.price;
        ingredientsIdTemp.push(item._id);
      }
    });
    dispatch({
      type: ADD_ITEMS_LIST_FROM_CONSTRUCTOR,
      itemsList: ingredientsIdTemp,
      total: total,
    });
  }, [items, dispatch]);

  function getFirstElement(item) {
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

  function getLastElement(item) {
    return (
      <li key={item._id + "d"} className={styles.item}>
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
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </li>
    );
  }

  return (
    <ul className={`${styles.list}`}>
      {getFirstElement(firstBun)}
      <li>
        <ul className={styles.listMiddle}>
          {items.map((item) => {
            if (item.type !== "bun") {
              return getMiddleElement(item);
            }
          })}
        </ul>
      </li>
      {getLastElement(firstBun)}
    </ul>
  );
}
