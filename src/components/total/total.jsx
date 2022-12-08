import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import totalStyles from "./total.module.css";
import iconImagePath from "../../images/icon-36x36.svg";

export default function Total({open}) {
  return (
    <div className={`${totalStyles.total} mt-10`}>
      <div className={totalStyles.totalPrice}>
        <p className="text text_type_digits-medium mr-3">610</p>
        <img
          src={iconImagePath}
          alt="CurrencyIcon"
          className={`${totalStyles.image} mr-10`}
        />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={()=>open()}>
        Оформить заказ
      </Button>
    </div>
  );
}
