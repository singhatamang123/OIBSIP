import { React, useState } from "react";
import p1 from "../../../images/new.png";
import p2 from "../../../images/pi.png";
import p3 from "../../../images/mag.png";

const pizzaData = [
  {
    name: "Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 12.99,
    img: p1,
  },
  {
    name: "Ni",
    price: 1.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    img: p2,
  },
  {
    name: "Czza",
    price: 1.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    img: p3,
  },

  {
    name: "Czza",
    price: 1.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    img: p3,
  },

  {
    name: "Ni",
    price: 1.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    img: p2,
  },
];
const PizzaCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPizzaData = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="cards">
      <div className="menu-search">
        <h1 className="menu-title">Menu items</h1>
        <input
          type="text"
          placeholder="Search menu items.."
          className="input"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}

          // onChange={(event) => setSearchTerm(event.target.value)}

          // value={searchTerm}
        />
      </div>

      <div
        className={`pizza-grid ${
          filteredPizzaData.length === 1 ? "single-item" : ""
        }`}
      >
        {filteredPizzaData.map((pizza, index) => (
          <div
            key={index}
            className={`pizza ${
              pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
                ? ""
                : "hidden"
            }`}
          >
            <img src={pizza.img} alt={pizza.name} className="pizza__img" />
            <h2 className="pizza__name">{pizza.name}</h2>
            <p className="pizza__description">{pizza.description}</p>
            <p className="pizza__price">Price: ${pizza.price}</p>
            <button className="pizza__button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PizzaCard;
