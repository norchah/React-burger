import React from "react";
import Cards from "../cards-ingridient/cards";
import ingrStyles from "./ingrid.module.css";

export default function Ingridients(props) {
  const bunProps = props.value.filter((item) => item.type === "bun");
  const sauceProps = props.value.filter((item) => item.type === "sauce");
  const mainProps = props.value.filter((item) => item.type === "main");
  const titleStyle = {marginTop: '40px'}

  return (
    <ul className={ingrStyles.list}>
      <li>
        <h2 className="text text_type_main-medium">Булки</h2>
        <Cards value={bunProps} />
      </li>
      <li>
        <h2 style={titleStyle} className="text text_type_main-medium">Соусы</h2>
        <Cards value={sauceProps} />
      </li>
      <li>
        <h2 style={titleStyle} className="text text_type_main-medium">Начинки</h2>
        <Cards value={mainProps} />
      </li>
    </ul>
  );
}
