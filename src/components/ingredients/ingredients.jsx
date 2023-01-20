import React, { useEffect, useRef } from "react";
import Cards from "../cards-ingredient/cards.jsx";
import ingrStyles from "./ingrid.module.css";
import { useSelector, useDispatch } from "react-redux";
import { InView, useInView } from "react-intersection-observer";
import { SWITCH_CURRENT_TAB } from "../../services/actions/burger-ingredients.js";

export default function Ingredients() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { ingredients, currentTab } = useSelector((store) => ({
    ingredients: store.start.ingredients,
    currentTab: store.start.currentTab,
  }));

  const [bunRef, inViewBun] = useInView({ treshold: 0 });
  const [sauceRef, inViewSauce] = useInView({ treshold: 0 });
  const [mainRef, inViewMain] = useInView({ treshold: 0 });


  useEffect(
    () => {
      if (inViewBun) {
        dispatch({
          type: SWITCH_CURRENT_TAB,
          current: 'bun'
        })
      } else if (inViewSauce) {
        dispatch({
          type: SWITCH_CURRENT_TAB,
          current: 'sauce'
        })
      } else if (inViewMain) {
        dispatch({
          type: SWITCH_CURRENT_TAB,
          current: 'main'
        })
      }
    }, [inViewBun, inViewSauce, inViewMain, dispatch])
  

  const bunProps = ingredients.filter((item) => item.type === "bun");
  const sauceProps = ingredients.filter((item) => item.type === "sauce");
  const mainProps = ingredients.filter((item) => item.type === "main");

  return (
    <ul className={`${ingrStyles.list} mt-10`}>
      <li key={1} className="" ref={bunRef}>
        <InView
          as="h2"
          id={"bun"}
          className="text text_type_main-medium"
        >
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
        </InView>{" "}
        <Cards value={sauceProps} />
      </li>
      <li key={3} ref={mainRef}>
        <InView
          as="h2"
          id={"main"}
          className="text text_type_main-medium mt-2"
        >
          Начинки
        </InView>
        <Cards value={mainProps} />
      </li>
    </ul>
  );
}
