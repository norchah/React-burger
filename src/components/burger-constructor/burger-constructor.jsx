import React from "react";
import PropTypes from "prop-types";
import ListElements from "../constructor-list-elements/list-element";
import styles from "./burger-constructor.module.css";
import Total from "../total/total.jsx";
import { messagePropTypes } from "../../utils/data";

export default function BurgerConstructor({value, open}) {
  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4`}>
      <ListElements value={value} />
      <Total open={open}/>
    </section>
  );
}

BurgerConstructor.propTypes = {
  value: PropTypes.arrayOf(messagePropTypes).isRequired
};
