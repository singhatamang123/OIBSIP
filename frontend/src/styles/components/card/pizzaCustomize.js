import React, { useState } from "react";
import "./pizzaCustomize.modules.scss";
import { FaPizzaSlice, FaCheese, FaCarrot, FaHotjar } from "react-icons/fa";

const PizzaCustomize = () => {
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedSauce, setSelectedSauce] = useState(null);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [selectedVeggies, setSelectedVeggies] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const bases = ["Traditional Wheat Dough", "Whole Wheat Dough", "Gluten-Free Dough", "Thin Crust Dough", "Thick Crust Dough"];
  const sauces = ["Tomato Sauce", "BBQ Sauce", "Garlic Ranch Sauce", "Alfredo Sauce", "Pesto Sauce"];
  const cheeses = ["Mozzarella", "Cheddar", "Parmesan", "Gorgonzola", "Ricotta"];
  const veggiesList = ["Bell Peppers", "Mushrooms", "Onions", "Spinach", "Tomatoes"];
  const sizes = ["Small", "Medium", "Large"];

  const selectBase = (base) => setSelectedBase(base);
  const selectSauce = (sauce) => setSelectedSauce(sauce);
  const selectCheese = (cheese) => setSelectedCheese(cheese);
  const selectSize = (size) => setSelectedSize(size);
  const selectVeggie = (veggie) => {
    if (selectedVeggies.includes(veggie)) {
      setSelectedVeggies(selectedVeggies.filter((v) => v !== veggie));
    } else {
      setSelectedVeggies([...selectedVeggies, veggie]);
    }
  };

  const addToCart = () => {
    const order = {
      base: selectedBase,
      sauce: selectedSauce,
      cheese: selectedCheese,
      veggies: selectedVeggies,
      size: selectedSize,
      quantity: quantity,
    };
    console.log(order);
    // Here you would typically add the order to your app's cart state
  };

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className="pizza-customize"
    >
      <h1>Create your own pizza</h1>
      <div className="grid">
        {[
          { title: "Base", icon: <FaPizzaSlice />, options: bases, selected: selectedBase, select: selectBase },
          { title: "Sauce", icon: <FaHotjar />, options: sauces, selected: selectedSauce, select: selectSauce },
          { title: "Cheese", icon: <FaCheese />, options: cheeses, selected: selectedCheese, select: selectCheese },
          { title: "Veg", icon: <FaCarrot />, options: veggiesList, selected: selectedVeggies, select: selectVeggie, isCheckbox: true },
          { title: "Size", icon: null, options: sizes, selected: selectedSize, select: selectSize }
        ].map((item, index) => (
          <div key={index}>
            <h2>
              {item.icon} {item.title}
            </h2>
            <div className="options">
              {item.options.map((option, i) => (
                <div key={i}>
                  <input
                    type={item.isCheckbox ? "checkbox" : "radio"}
                    id={`${item.title}${i}`}
                    name={item.title}
                    value={option}
                    checked={item.isCheckbox ? item.selected.includes(option) : item.selected === option}
                    onChange={() => item.select(option)}
                  />
                  <label htmlFor={`${item.title}${i}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2>Quantity</h2>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default PizzaCustomize;
