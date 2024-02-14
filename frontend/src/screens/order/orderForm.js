// OrderForm.js
import React, { useState } from "react";
import styles from "./orderForm.module.scss";
import img from "../../images/gg.jpeg"; // Replace with your image path
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; // Import icons

const OrderForm = ({ closeModal }) => {
  const [items, setItems] = useState([
    { name: "Shawarma Pizza", price: 18.0, quantity: 1, img: img },
    { name: "Shawarma Pizza", price: 18.0, quantity: 1, img: img },
    { name: "Shawarma Pizza", price: 18.0, quantity: 1, img: img },
    // Add more items here...
    { name: "Shawarma Pizza", price: 18.0, quantity: 1, img: img },
    { name: "Shawarma Pizza", price: 18.0, quantity: 1, img: img },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const newItems = [...items];
    newQuantity = Math.max(1, newQuantity); // Ensure quantity is at least 1
    newItems[index].quantity = newQuantity;
    setItems(newItems);
  };

  const handleCheckout = (event) => {
    event.stopPropagation();
    // Your checkout logic here
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div
      className={styles.orderForm}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.itemsContainer}>
        <h2>Your Order</h2>

        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.img} alt={item.name} className={styles.image} />
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.price}>${item.price.toFixed(2)}</p>
            <div className={styles.quantity}>
              <button
                onClick={() => handleQuantityChange(index, item.quantity - 1)}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                readOnly // Make input read-only
              />
              <button
                onClick={() => handleQuantityChange(index, item.quantity + 1)}
              >
                <FaPlus />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className={styles.delete}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.fixedPosition}>
        <p className={styles.total}>
          Total: $
          {items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
        <button
          type="button"
          onClick={handleCheckout}
          className={styles.checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
