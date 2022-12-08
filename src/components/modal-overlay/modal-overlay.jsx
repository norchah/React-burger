import React from "react";
import PropTypes from 'prop-types';
import { messagePropTypes } from "../../utils/data";
import { createPortal } from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../modal-ingridient-details/ingridient-details";
import OrderDetails from "../modal-order-details/order-details";


const ModalOverlay = ({ active, close, value, data }) => {
  return createPortal(
    <div
      className={
        active
          ? `${modalStyles.modal} ${modalStyles.active}`
          : `${modalStyles.modal}`
      }
      onClick={() => {
        close();
      }}
      onKeyPress={(key) => console.log(key)}
    >
      <section
        className={`${modalStyles.content} pl-10 pr-10 pt-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={modalStyles.modalHeader}>
          <h2 className={`${modalStyles.title} text text_type_main-large`}>
            {value ? "Детали ингредиента" : ""}
          </h2>
          <button className={modalStyles.button} onClick={() => close()}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {value && <IngredientDetails ingrData={value} />}
        {!value && <OrderDetails data={data} />}
      </section>
    </div>,
    document.querySelector("#modal")
  );
};

ModalOverlay.propTypes = {
  active: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  value: PropTypes.objectOf(messagePropTypes)
}

export default ModalOverlay;
