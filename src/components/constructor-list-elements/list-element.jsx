import React, { useEffect } from "react";
import styles from "./list-element.module.css";
import FirstElement from "../elements/first-element";
import LastElement from "../elements/last-element";
import { MiddleElements } from "../elements/middle-elements";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_INGREDIENT,
  INCREASE_ITEM,
  ADD_BUN,
  DEL_BUNS,
  CLEAR_BUN_COUNT,
  ADD_TOTAL,
} from "../../services/actions/burger-ingredients";
import { isEmpty } from "../../utils/data";
import { useDrop } from "react-dnd";
import { v4 as uuid } from "uuid";

export default function ListElements() {
  const dispatch = useDispatch();
  const { bun, constructor, orderList } = useSelector((store) => ({
    bun: store.start.bun,
    constructor: store.start.constructor,
    orderList: store.start.orderList,
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

  function onDropHandlerBun(item) {
    dispatch({
      type: DEL_BUNS,
    });
    dispatch({
      type: ADD_BUN,
      ...item,
    });
    dispatch({
      type: CLEAR_BUN_COUNT,
    });
    dispatch({
      type: INCREASE_ITEM,
      ...item,
    });
  }

  function onDropHandler(item) {
    dispatch({
      type: ADD_INGREDIENT,
      ...item,
    });
    dispatch({
      type: INCREASE_ITEM,
      ...item,
    });
  }

  useEffect(() => {
    let total = bun[0].price * 2;
    let ingredientsIdTemp = [bun[0]._id];
    constructor.map((item) => {
      total += item.price;
      ingredientsIdTemp.push(item._id);
    });
    dispatch({
      type: ADD_TOTAL,
      orderList: ingredientsIdTemp,
      totalPrice: total,
    });
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
