import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import totalStyles from "./total.module.css";
import iconImagePath from "../../images/icon-36x36.svg";
import { useSelector, useDispatch } from 'react-redux';
import { getNumberOfOrder } from "../../services/actions/modal";

export default function Total() {
  const dispatch = useDispatch();
  const { list, total } = useSelector(store=> ({
    list: store.order.idsList,
    total: store.order.totalPrice,
    })
  );

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
          dispatch(getNumberOfOrder(list));
        }}
      >
        Оформить заказ
      </Button>
    </div>
  );
}