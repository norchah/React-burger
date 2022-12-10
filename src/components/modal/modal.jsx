import React from "react";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";

function isEmpty(value) {
    if(value === undefined) {
        return false;
    }
    return true;
}

export default function Modal({ active, close, value, title, children }) {
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", handleCloseByEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, []);

  return createPortal(
    <ModalOverlay active={active} close={close}>
      <section
        className={`${modalStyles.content} pl-10 pr-10 pt-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={modalStyles.modalHeader}>
          <h2 className={`${modalStyles.title} text text_type_main-large`}>
            {isEmpty(value.value) ? title : ""}
          </h2>
          <button className={modalStyles.button} onClick={() => close()}>
            <CloseIcon type="primary" />
          </button>
        </header>
        {children}
      </section>
    </ModalOverlay>,
    document.querySelector("#modal")
  );
}

Modal.protoTypes = {
    active: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    value: PropTypes.objectOf().isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

