import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useDispatch } from "react-redux";
import { modalActions } from "../../services/slices/modal-slice";
import { useNavigate } from "react-router-dom";

export default function Modal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeModal = modalActions.closeModal;

  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        dispatch(closeModal());
        navigate(-1)
      }
    };
    document.addEventListener("keydown", handleCloseByEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [dispatch, closeModal]);

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
            onClick={() => {
              dispatch(closeModal());
              navigate(-1);
            }}
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
