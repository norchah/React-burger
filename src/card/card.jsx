import React from "react";
import Price from "../price/price";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from "./card.module.css";

export default function Card(props) {
  return (
    <article className={`${cardStyles.card} pb-8`}>
      {props.value.state.isChoose && (
        <Counter count={1} size="default" extraClass="" />
      )}

      <img
        className={cardStyles.image}
        src={props.value.image}
        alt={props.value.name}
      />
      <Price className={"text text_type_digits-default"} type={"primary"}>
        {props.value.price}
      </Price>
      <p
        style={{ textAlign: "center" }}
        className="text text_type_main-default mt-2"
      >
        {props.value.name}
      </p>
    </article>
  );
}
