import React from "react";
import PropTypes from 'prop-types';
import modalStyles from "./modal.module.css";

const ModalOverlay = ({ active, close, children }) => {
  return (
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
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  active: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default ModalOverlay;
