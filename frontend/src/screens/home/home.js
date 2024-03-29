import React from "react";
import pizza from "../../images/R.png";
import RotatingImage from "../../styles/components/rotateImage";
import Navbar from "../../styles/components/Navbar/navbar";
import PizzaCard from "../../styles/components/card/pizzacard";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <RotatingImage src={pizza} alt="Rotating Image" />

      <PizzaCard />
      <br />
      <Footer />

    </div>
  );
};

export default Home;
