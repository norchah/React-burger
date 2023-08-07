import React, { useEffect } from "react";
import Cards from "../cards-ingredient/cards.jsx";
import ingrStyles from "./ingrid.module.css";
import { useSelector, useDispatch } from "react-redux";
import { InView, useInView } from "react-intersection-observer";
import { switcherActions } from "../../services/slices/swither-slice.js";

export default function Ingredients() {
  const dispatch = useDispatch();
  const switchTab = switcherActions.switchCurrentTab;
  const { ingredients } = useSelector((store) => ({
    ingredients: store.ingredients.ingredients,
  }));

  const [bunRef, inViewBun] = useInView({ treshold: 0 });
  const [sauceRef, inViewSauce] = useInView({ treshold: 0 });
  const [mainRef, inViewMain] = useInView({ treshold: 0 });

  useEffect(() => {
    if (inViewBun) {
      dispatch(switchTab("bun"));
    } else if (inViewSauce) {
      dispatch(switchTab("sauce"));
    } else if (inViewMain) {
      dispatch(switchTab("main"));
    }
  }, [inViewBun, inViewSauce, inViewMain, switchTab, dispatch]);

  const bunProps = ingredients.filter((item) => item.type === "bun");
  const sauceProps = ingredients.filter((item) => item.type === "sauce");
  const mainProps = ingredients.filter((item) => item.type === "main");

  return (
    <ul className={`${ingrStyles.list} mt-10`}>
      <li key={1} className="" ref={bunRef}>
        <InView as="h2" id={"bun"} className="text text_type_main-medium">
          Булки
        </InView>
        <Cards value={bunProps} />
      </li>
      <li key={2} ref={sauceRef}>
        <InView
          as="h2"
          id={"sauce"}
          className="text text_type_main-medium mt-2"
        >
          Соусы
        </InView>
        <Cards value={sauceProps} />
      </li>
      <li key={3} ref={mainRef}>
        <InView as="h2" id={"main"} className="text text_type_main-medium mt-2">
          Начинки
        </InView>
        <Cards value={mainProps} />
      </li>
    </ul>
  );
}
