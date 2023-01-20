import React from "react";
import ListElements from "../constructor-list-elements/list-element";
import styles from "./burger-constructor.module.css";
import Total from "../total/total.jsx";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/data";

export default function BurgerConstructor() {
  const { items, isLoading } = useSelector((store) => ({
    items: store.start.ingredients,
  }));
  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4`}>
       {isEmpty(items)?  <ListElements /> : 'loading...'} 
      <Total />
    </section>
  );
}
