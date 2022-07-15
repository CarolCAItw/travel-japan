import React, { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Carts from "./pages/Carts";
import Kanto from "./pages/Kanto";
import Kansai from "./pages/Kansai";
import Hokkaido from "./pages/Hokkaido";
import Kyushu from "./pages/Kyushu";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">
      <Nav setShow={setShow} size={cart.length} />
      <Banner />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/kanto" element={<Kanto handleClick={handleClick} />} />
        <Route path="/kansai" element={<Kansai handleClick={handleClick} />} />
        <Route
          path="/hokkaido"
          element={<Hokkaido handleClick={handleClick} />}
        />
        <Route path="/kyushu" element={<Kyushu handleClick={handleClick} />} />
        <Route
          path="/carts"
          element={
            <Carts cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
