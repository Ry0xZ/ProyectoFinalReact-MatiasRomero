import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">Tu Mejor Opcion</h1>

        <Link to="/shop" className="home__cta">
          Ir a la Tienda
        </Link>
      </div>
    </>
  );
};

export default Home;
