import React from "react";
import Card from "../card/card";
import cardsStyles from "./cards.module.css";

export default function Cards(props) {
  return (
    <ul className={`mt-6 pl-10 ${cardsStyles.cards}`}>
      {props.value.map((item) => (
        <li key={item._id} className={`pl-4 pr-6 ${cardsStyles.item}`}>
          <Card value={item} />
        </li>
      ))}
    </ul>
  );
}
