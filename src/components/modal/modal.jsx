import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../services/actions/modal";

export default function Modal(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        dispatch({
          type: CLOSE_MODAL,
        });
      }
    };
    document.addEventListener("keydown", handleCloseByEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay active={props.active}>
      <section
        className={`${modalStyles.content} pl-10 pr-10 pt-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={modalStyles.modalHeader}>
          <h2 className={`${modalStyles.title} text text_type_main-large`}>
            {props.title}
          </h2>
          <button
            className={modalStyles.button}
            onClick={() =>
              dispatch({
                type: CLOSE_MODAL,
              })
            }
          >
            <CloseIcon type="primary" />
          </button>
        </header>
        {props.children}
      </section>
    </ModalOverlay>,
    document.querySelector("#modal")
  );
}

Modal.protoTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
