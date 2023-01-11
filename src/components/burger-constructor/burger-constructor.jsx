import React, {useState} from "react";
import PropTypes from "prop-types";
import ListElements from "../constructor-list-elements/list-element";
import styles from "./burger-constructor.module.css";
import Total from "../total/total.jsx";
import { OrderContext } from "../../services/order-context";

export default function BurgerConstructor({ open }) {
  const [order, setOrder] = useState({
    totalPrice: 0,
    ingredientsId: [],
  })

  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4`}>
      <OrderContext.Provider value={{ order, setOrder }}>
        <ListElements />
        <Total open={open} />
      </OrderContext.Provider>
    </section>
  );
}

BurgerConstructor.propTypes = {
  open: PropTypes.func.isRequired,
};
