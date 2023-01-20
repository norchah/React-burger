import React, { useEffect } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import totalStyles from "./total.module.css";
import iconImagePath from "../../images/icon-36x36.svg";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfOrder } from "../../services/actions/burger-ingredients";

export default function Total() {
  const dispatch = useDispatch();
  const { total, orderList } = useSelector((store) => ({
    total: store.start.totalPrice,
    orderList: store.start.orderList,
  }));

  return (
    <div className={`${totalStyles.total} mt-10`}>
      <div className={totalStyles.totalPrice}>
        <p className="text text_type_digits-medium mr-3">{total}</p>
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
        onClick={() => {
          dispatch(getNumberOfOrder(orderList));
        }}
      >
        Оформить заказ
      </Button>
    </div>
  );
}
