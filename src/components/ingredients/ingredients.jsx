import React, {useContext} from "react";
import Cards from "../cards-ingredient/cards.jsx";
import ingrStyles from "./ingrid.module.css";
import PropTypes from "prop-types";
import { BurgerContext } from "../../services/burger-context.jsx";

export default function Ingredients({open}) {
  const {burgerState } = useContext(BurgerContext)
  const { ingredients } = burgerState;
  const bunProps = ingredients.filter((item) => item.type === "bun");
  const sauceProps = ingredients.filter((item) => item.type === "sauce");
  const mainProps = ingredients.filter((item) => item.type === "main");

  return (
    <ul className={`${ingrStyles.list} mt-10`}>
      <li key={1} className="">
        <h2 className="text text_type_main-medium">Булки</h2>
        <Cards value={bunProps} open={open}/>
      </li>
      <li key={2}>
        <h2 className="text text_type_main-medium mt-2">Соусы</h2>{" "}
        <Cards value={sauceProps} open={open}/>
      </li>
      <li key={3}>
        <h2 className="text text_type_main-medium mt-2">Начинки</h2>
        <Cards value={mainProps} open={open}/>
      </li>
    </ul>
  );
}

Ingredients.propTypes = {
  open: PropTypes.func.isRequired,
};
