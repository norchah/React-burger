import React from "react";
import Price from "../price/price";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from "./card.module.css";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { addIngredientDetails } from "../../services/slices/ingridient-details-slice";
import { modalActions } from "../../services/slices/modal-slice";
 
export default function Card({ value }) {
  const [{opacity}, dragRef] = useDrag({
    type: value.type === 'bun' ? 'bun' : ('main' || 'sauce'),
    item: {value},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.2 : 1,
    })
  })

  const dispatch = useDispatch();

  return (
    <button className={cardStyles.button}>
      <article
        className={`${cardStyles.card} pb-8`}
        style={{opacity: opacity}}
        ref={dragRef}
        onClick={() => {
          dispatch(modalActions.openModalIngredient());
          dispatch(addIngredientDetails(value));
        }}
      >
        {value.__v === 0 ? '' : <Counter count={value.__v} size="default" extraClass="" />}
        <img className={cardStyles.image} src={value.image} alt={value.name} />
        <Price>{value.price}</Price>
        <p className={`${cardStyles.text} text text_type_main-default mt-2`}>
          {value.name}
        </p>
      </article>
    </button>
  );
};

Card.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
