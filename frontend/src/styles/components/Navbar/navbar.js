import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import AuthForm from "../../../screens/login/authForm";
import OrderForm from "../../../screens/order/orderForm";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false); // New state for the order modal

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openOrderModal = () => {
    setShowOrderModal(true); // New function to open the order modal
  };

  const closeOrderModal = () => {
    setShowOrderModal(false); // New function to close the order modal
  };

  return (
    <section>
      <nav className={styles.navBar}>
        <div className={styles.brandName}>Nepizza</div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/auth" className={styles.link}>
              <button onClick={openModal} className={styles.link}>
                <span>Login</span>
              </button>
            </Link>
          </li>

          <li>
            <Link to="/order" className={styles.link}>
              <button onClick={openOrderModal}>
                {" "}
                {/* Call the new function when the button is clicked */}
                <span>My Order</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {showModal && (
        <div className={styles.modal} onClick={closeModal}>
          <AuthForm closeModal={closeModal} />
        </div>
      )}
      {showOrderModal && ( // New modal for the order form
        <div className={styles.orderModal} onClick={closeOrderModal}>
          {" "}
          {/* Use a different class for the order modal */}
          <OrderForm closeModal={closeOrderModal} />
        </div>
      )}
    </section>
  );
};

export default Navbar;
