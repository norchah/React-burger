import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price.module.css";
import PropTypes from "prop-types";

export default function Price(props) {
  return (
    <div className={`${priceStyles.price} mt-2`}>
      {/* В макете написано 4px реально в макете 8пх */}
      <p className="text text_type_digits-default mr-2" type="primary">{props.children}</p>
      <CurrencyIcon type={props.type}></CurrencyIcon>
    </div>
  );
}

Price.propTypes = {
  children: PropTypes.number.isRequired
};