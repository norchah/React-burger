import React from "react";
import Cards from "../cards-ingredient/cards.jsx";
import ingrStyles from "./ingrid.module.css";
import { useSelector} from 'react-redux';

export default function Ingredients() {
  const items = useSelector(store => store.start.ingredients)

  const bunProps = items.filter((item) => item.type === "bun");
  const sauceProps = items.filter((item) => item.type === "sauce");
  const mainProps = items.filter((item) => item.type === "main");

  return (
    <ul className={`${ingrStyles.list} mt-10`}>
      <li key={1} className="">
        <h2 className="text text_type_main-medium">Булки</h2>
        <Cards value={bunProps} />
      </li>
      <li key={2}>
        <h2 className="text text_type_main-medium mt-2">Соусы</h2>{" "}
        <Cards value={sauceProps} />
      </li>
      <li key={3}>
        <h2 className="text text_type_main-medium mt-2">Начинки</h2>
        <Cards value={mainProps} />
      </li>
    </ul>
  );
}
