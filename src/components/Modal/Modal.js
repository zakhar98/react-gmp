import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function Modal({children, title, isShown, onClose, onSubmit}) {
  return isShown ? (
    <>
      <div className="modal">
        <div className="modal__header">
          <button
            className="modal__close-button"
            onClick={onClose}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="modal__title">
            {title}
          </div>
        </div>
        <div className="modal__content">{React.cloneElement(children, {onClose, onSubmit})}</div>
      </div>
      <div className="modal-overlay"></div>
    </>
  ): null;
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
