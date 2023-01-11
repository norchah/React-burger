import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import totalStyles from "./total.module.css";
import iconImagePath from "../../images/icon-36x36.svg";
import { OrderContext } from "../../services/order-context";

export default function Total({ open }) {
  const { order } = useContext(OrderContext);
  const {ingredientsId} = order
  return (
    <div className={`${totalStyles.total} mt-10`}>
      <div className={totalStyles.totalPrice}>
        <p className="text text_type_digits-medium mr-3">{order.totalPrice}</p>
        <img
          src={iconImagePath}
          alt="CurrencyIcon"
          className={`${totalStyles.image} mr-10`}
        />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => open(ingredientsId)}
      >
        Оформить заказ
      </Button>
    </div>
  );
}

Total.propTypes = {
  open: PropTypes.func.isRequired,
};
