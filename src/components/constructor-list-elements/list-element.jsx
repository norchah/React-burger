import React, { useContext, useEffect } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./list-element.module.css";
import { BurgerContext } from "../../services/burger-context";
import { OrderContext } from "../../services/order-context";

export default function ListElements() {
  const { burgerState } = useContext(BurgerContext);
  const { ingredients } = burgerState;
  const firstBun = ingredients.find((item) => item.type === "bun");
  const { setOrder } = useContext(OrderContext);

  useEffect(() => {
    let total = firstBun.price * 2;
    let ingredientsIdTemp = [firstBun._id];
    ingredients.map((item) => {
      if (item.type !== "bun") {
        total += item.price;
        ingredientsIdTemp.push(item._id)
      }
      setOrder({
        ingredientsId: ingredientsIdTemp,
        totalPrice: total,
      });
    });
  }, [ingredients, setOrder]);

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
          {ingredients.map((item) => {
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

// ListElements.propTypes = {
//   value: PropTypes.arrayOf(messagePropTypes).isRequired
// };
