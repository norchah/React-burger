import React from "react";
import PropTypes from "prop-types";
import stylesOrder from "./order.module.css";
import done from "../../images/done.jpg";

export default function OrderDetails({ data }) {
  return (
    <main className={stylesOrder.container}>
      <h2 className={`${stylesOrder.shadow} text text_type_digits-large`}>
        {data}
      </h2>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={done}></img>
      <p className="text text_type_main-small mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </main>
  );
}

OrderDetails.protoTypes = {
  data: PropTypes.string.isRequired,
};
