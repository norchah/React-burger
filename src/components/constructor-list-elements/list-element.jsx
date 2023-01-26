import React, { useEffect } from "react";
import styles from "./list-element.module.css";
import FirstElement from "../elements/first-element";
import LastElement from "../elements/last-element";
import { MiddleElements } from "../elements/middle-elements";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "../../utils/data";
import { useDrop } from "react-dnd";
import { v4 as uuid } from "uuid";
import { ingredientsActions } from "../../services/slices/ingredients-slice";
import { burgerConstructorActions } from "../../services/slices/constructor-slice";

export default function ListElements() {
  const dispatch = useDispatch();
  const { bun, constructor } = useSelector((store) => ({
    bun: store.burgerConstructor.bun,
    constructor: store.burgerConstructor.burgerConstructor,
  }));

  const [{ isHover }, dropRef] = useDrop({
    //не булки
    accept: "main" || "sauce",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(itemId) {
      onDropHandler(itemId);
    },
  });

  const [{ isHoverBun }, dropBunRef] = useDrop({
    //булки
    accept: "bun",
    collect: (monitor) => ({
      isHoverBun: monitor.isOver(),
    }),
    drop(itemId) {
      onDropHandlerBun(itemId);
    },
  });

  const borderColor = isHover ? "blue" : "transparent";
  const borderColorBun = isHoverBun ? "blue" : "transparent";

  function onDropHandlerBun({ value }) {
    console.log(value._id);
    dispatch(burgerConstructorActions.addBun(value));
    dispatch(ingredientsActions.clearBunCount());
    dispatch(ingredientsActions.increaseItem(value._id));
  }

  function onDropHandler({ value }) {
    dispatch(burgerConstructorActions.addIngredient(value));
    dispatch(ingredientsActions.increaseItem(value._id));
  }

  useEffect(() => {
    //TODO: перенсти куда-то в отдельное место
    let total = bun.price * 2;
    let ingredientsIdTemp = [bun._id];
    constructor.map((item) => {
      total += item.price;
      ingredientsIdTemp.push(item._id);
    });
    dispatch(
      burgerConstructorActions.addTotal({
        orderList: ingredientsIdTemp,
        totalPrice: total,
      })
    );
  }, [constructor, bun, dispatch]);

  return (
    <ul
      className={`${styles.list}`}
      ref={dropBunRef}
      style={{ outline: `1px solid ${borderColorBun}` }}
    >
      <FirstElement value={bun} />
      <li ref={dropRef} style={{ border: `1px solid ${borderColor}` }}>
        <ul className={styles.listMiddle}>
          {isEmpty(constructor) &&
            constructor.map((item, index) => {
              if (item.type !== "bun") {
                return (
                  <MiddleElements key={uuid()} item={item} index={index} />
                );
              }
            })}
        </ul>
      </li>
      <LastElement value={bun} />
    </ul>
  );
}
