import React from "react";
import Price from "../price/price";
import cardStyles from "./card.module.css";

export default function Card(props) {
    const nameStyle = {marginTop: '8px', textAlign: 'center'};
  return (
    <article className={cardStyles.card}>
      <img
        className={cardStyles.image}
        src={props.value.image}
        alt={props.value.name}
      />
      <Price>{props.value.price}</Price>
      <p style={nameStyle} className="text text_type_main-default">{props.value.name}</p>
    </article>
  );
}
