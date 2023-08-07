import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import totalStyles from "./total.module.css";
import iconImagePath from "../../images/icon-36x36.svg";
import { useSelector, useDispatch } from "react-redux";
import { getNumberOfOrder } from "../../services/api/get-number-order";
import { useNavigate } from "react-router-dom";

export default function Total() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { total, orderList, isAuth } = useSelector((store) => ({
    total: store.burgerConstructor.totalPrice,
    orderList: store.burgerConstructor.orderList,
    isAuth: store.auth.isAuth,
  }));

  const onClick = () => {
    if(isAuth) {
      dispatch(getNumberOfOrder(orderList))
    } else {
      navigate("/login");
    }
  }

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
        onClick={onClick}
      >
        Оформить заказ
      </Button>
    </div>
  );
}
