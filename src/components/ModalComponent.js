import React, { useState } from "react";

import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    overlay : {
      backgroundColor: 'grey'
    },
    content: {
      color: 'orange'
    }
  }

  return (

    <div>
      <button onClick={openModal}>Open Modal 📖</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2> Modal title</h2>
        <p> Modal Body</p>
        <div>
          <button onClick={closeModal}> Close modal 📕 </button>
        </div>
      </Modal>
    </div>

  );
};

export default ModalComponent;
