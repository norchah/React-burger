import React from "react";
import Cards from "../cards-ingridient/cards";
import ingrStyles from "./ingrid.module.css";

export default function Ingridients(props) {
  const bunProps = props.value.filter((item) => item.type === "bun");
  const sauceProps = props.value.filter((item) => item.type === "sauce");
  const mainProps = props.value.filter((item) => item.type === "main");

  return (
    <ul className={`${ingrStyles.list} mt-10`}>
      <li key={1} className="">
        <h2 className="text text_type_main-medium">Булки</h2>
        <Cards value={bunProps} />
      </li>
      <li key={2}>
        <h2 className="text text_type_main-medium mt-2">Соусы</h2>{" "} {/* 32px нижний отступ карточки + 8 верхний отступ = 40 px */}
        <Cards value={sauceProps} />
      </li>
      <li key={3}>
        <h2 className="text text_type_main-medium mt-2">Начинки</h2>
        <Cards value={mainProps} />
      </li>
    </ul>
  );
}
