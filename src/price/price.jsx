import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price.module.css";

export default function Price(props) {
  return (
    <div className={priceStyles.price}>
      <p className={props.className} style={{ marginRight: "9px" }}>
        {props.children}
      </p>
      <CurrencyIcon type={props.type}></CurrencyIcon>
    </div>
  );
}
