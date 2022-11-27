import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price.module.css";

export default function Price(props) {
  return (
    <div className={`${priceStyles.price} mt-2`}>
      {/* В макете написано 4px реально в макете 8пх */}
      <p className={`${props.className} mr-2`}>{props.children}</p>
      <CurrencyIcon type={props.type}></CurrencyIcon>
    </div>
  );
}
