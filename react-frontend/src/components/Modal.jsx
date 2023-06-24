import React, { useState } from 'react';

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };

  
  return (
    <>
      <button onClick={openModal}>Abrir Modal</button>
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* Contenido del modal */}

        <button onClick={closeModal}>Cerrar Modal</button>

      </div>
    </div></>
  )
  
}


