import React from "react";
import Price from "../price/price";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from "./card.module.css";
import PropTypes from "prop-types";

export default function Card({ value, open }) {
  return (
    <button className={cardStyles.button}>
      <article
        className={`${cardStyles.card} pb-8`}
        onClick={() => {
          open(value);
        }}
      >
        <Counter count={1} size="default" extraClass="" />
        <img className={cardStyles.image} src={value.image} alt={value.name} />
        <Price>{value.price}</Price>
        <p className={`${cardStyles.text} text text_type_main-default mt-2`}>
          {value.name}
        </p>
      </article>
    </button>
  );
}

Card.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.func.isRequired,
};
