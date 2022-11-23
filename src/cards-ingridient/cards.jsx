import React from "react";
import Card from "../card/card";
import cardsStyles from './cards.module.css';

export default function Cards(props) {
  return (
    <ul className={cardsStyles.cards}>
      {props.value.map((item) => (
        <li key={item._id}>
          <Card value={item} />
        </li>
      ))}
    </ul>
  );
}
