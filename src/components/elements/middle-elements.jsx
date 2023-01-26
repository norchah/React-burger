import React, { useRef } from "react";
import styles from "./list-elements.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { burgerConstructorActions } from "../../services/slices/constructor-slice";
import { ingredientsActions } from "../../services/slices/ingredients-slice";
import { v4 as uuid } from "uuid";

export function MiddleElements({ item, index }) {
  const dispatch = useDispatch();
  const { _id } = item;
  const ref = useRef(null);

  const [{ opacity }, dragRef] = useDrag({
    type: "sauce" || "main",
    item: { _id, index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  const [_, dropRef] = useDrop({
    accept: "sauce" || "main",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActyalY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActyalY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActyalY > hoverMiddleY) return;

      dispatch(
        burgerConstructorActions.moveIngredient({
          drag: dragIndex,
          hover: hoverIndex,
        })
      );
      item.index = hoverIndex;
    },
  });

  function handleDelete(e) {
    const target = e.currentTarget.closest("li");
    dispatch(ingredientsActions.decreaseItem(target.id));
    dispatch(burgerConstructorActions.delIngredient(target.id));
  }

  const dragDropRef = dragRef(dropRef(ref));

  return (
    <li
      ref={dragDropRef}
      id={item._id}
      key={uuid()}
      className={styles.itemMiddle}
      style={{ opacity: opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={handleDelete}
      />
    </li>
  );
}
