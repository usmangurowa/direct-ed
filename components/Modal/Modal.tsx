import React from "react";

type ModalPropsType = {
  open: boolean;
  onClose?(): void;
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ open, onClose, children, className }: ModalPropsType) => {
  const handleStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const handleClose = (event: React.MouseEvent) => {
    handleStopPropagation(event);
    if (onClose) {
      onClose();
    }
  };
  return (
    <>
      <input
        type="checkbox"
        checked={open}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal" onClick={onClose}>
        <div
          onClick={handleStopPropagation}
          className={`modal-box ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
