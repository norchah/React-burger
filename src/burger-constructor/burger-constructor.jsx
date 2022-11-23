import React from "react";
import ListElements from "../constructor-list-elements/list-element";
import styles from "./burger-constructor.module.css";
import Total from "../total/total";

export default function BurgerConstructor(props) {
  return (
    <section className={styles.section}>
      <ListElements value={props.value} />
      <Total />
    </section>
  );
}
