import React from "react";

const Modal = ({ message, onClose }) => (
  <div className="modal-overlay">
    <div className="modal bg-black-gradient w-[200px] h-[200px] text-white rounded-md">
      <div className="message">{message}</div>
      <button className="close" onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Modal;
