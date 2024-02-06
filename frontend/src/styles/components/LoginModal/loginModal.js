import React, { useState } from 'react';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal">
          <h2>Login</h2>
          <button onClick={toggleModal}>
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
