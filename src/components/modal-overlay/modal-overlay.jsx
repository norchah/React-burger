import React from "react";
import PropTypes from 'prop-types';
import modalStyles from "./modal.module.css";
import { useDispatch } from 'react-redux';
import { modalActions } from "../../services/slices/modal-slice";


const ModalOverlay = ({ active, children }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={
        active
          ? `${modalStyles.modal} ${modalStyles.active}`
          : `${modalStyles.modal}`
      }
      onClick={() => {
        dispatch(modalActions.closeModal())
      }}
    >
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}

export default ModalOverlay;
