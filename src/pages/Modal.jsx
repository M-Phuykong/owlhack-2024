import React from 'react';

function Modal({ isOpen, onClose, marker }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{marker.popUp}</h2>
        <p>
          This is a long message that provides additional information
          about the selected location. You can add as much text as you
          need here to describe the place in detail.
        </p>
      </div>
    </div>
  );
}

export default Modal;
