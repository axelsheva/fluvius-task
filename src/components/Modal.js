import React from 'react';

const Modal = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal modal-open">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              {title}
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
