import React from "react";
import PropTypes from 'prop-types';
import modalStyles from "./modal.module.css";
import { useDispatch } from 'react-redux';
import { modalActions } from "../../services/slices/modal-slice";
import { useNavigate } from "react-router-dom";


const ModalOverlay = ({ active, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={
        active
          ? `${modalStyles.modal} ${modalStyles.active}`
          : `${modalStyles.modal}`
      }
      onClick={() => {
        dispatch(modalActions.closeModal())
        navigate(-1)
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
