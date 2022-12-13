import React from "react";
import Cards from "../cards-ingridient/cards.jsx";
import ingrStyles from "./ingrid.module.css";
import PropTypes from "prop-types";
import { messagePropTypes } from "../../utils/data";

export default function Ingridients({value, open}) {
  const bunProps = value.filter((item) => item.type === "bun");
  const sauceProps = value.filter((item) => item.type === "sauce");
  const mainProps = value.filter((item) => item.type === "main");

  return (
    <ul className={`${ingrStyles.list} mt-10`}>
      <li key={1} className="">
        <h2 className="text text_type_main-medium">Булки</h2>
        <Cards value={bunProps} open={open}/>
      </li>
      <li key={2}>
        <h2 className="text text_type_main-medium mt-2">Соусы</h2>{" "} {/* 32px нижний отступ карточки + 8 верхний отступ = 40 px */}
        <Cards value={sauceProps} open={open}/>
      </li>
      <li key={3}>
        <h2 className="text text_type_main-medium mt-2">Начинки</h2>
        <Cards value={mainProps} open={open}/>
      </li>
    </ul>
  );
}

Ingridients.propTypes = {
  value: PropTypes.arrayOf(messagePropTypes).isRequired,
  open: PropTypes.func.isRequired,
};
