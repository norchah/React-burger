import React from "react";
import Card from "../card/card.jsx";
import cardsStyles from "./cards.module.css";
import PropTypes from 'prop-types';
import { messagePropTypes } from "../../utils/data.js";

export default function Cards({value, open}) {
  return (
    <ul className={`mt-6 pl-10 ${cardsStyles.cards}`}>
      {value.map((item) => (
        <li key={item._id} className={`pl-4 pr-6 ${cardsStyles.item}`}>
          <Card value={item} open={open}/>
        </li>
      ))}
    </ul>
  );
}

Cards.propTypes = {
  value: PropTypes.arrayOf(messagePropTypes).isRequired,
  open: PropTypes.func.isRequired,
};