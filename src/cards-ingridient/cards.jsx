import React from "react";
import Card from "../card/card";
import cardsStyles from './cards.module.css';

export default function Cards(props) {
  return (
    <ul className={cardsStyles.cards}>
      {props.value.map((item) => (
        <li>
          <Card value={item} key={item._id}/>
        </li>
      ))}
    </ul>
  );
}
