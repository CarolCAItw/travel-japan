import React, { useState, useEffect } from "react";
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

    if (arr[ind].amount > 10) {
      alert("超過10人團體，請洽客服！");
      arr[ind].amount -= d;
    }
  };

  useEffect(() => {});

  return (
    <div className="App">
      <Nav setShow={setShow} size={cart.length} />
      <Banner />
      <Routes>
<<<<<<< HEAD
        <Route path="/travel-japan" element={<Homepage />} />
        <Route path="/travel-japan/about" element={<About />} />
        <Route
          path="/travel-japan/kanto"
          element={<Kanto handleClick={handleClick} />}
        />
        <Route
          path="/travel-japan/kansai"
          element={<Kansai handleClick={handleClick} />}
        />
        <Route
          path="/travel-japan/hokkaido"
          element={<Hokkaido handleClick={handleClick} />}
        />
        <Route
          path="/travel-japan/kyushu"
          element={<Kyushu handleClick={handleClick} />}
        />
        <Route
=======
        <Route path="/travel-japan/" element={<Homepage />} />
        <Route path="/travel-japan/about" element={<About />} />
        <Route path="/travel-japan/kanto" element={<Kanto handleClick={handleClick} />} />
        <Route path="/travel-japan/kansai" element={<Kansai handleClick={handleClick} />} />
        <Route
          path="/travel-japan/hokkaido"
          element={<Hokkaido handleClick={handleClick} />}
        />
        <Route path="/travel-japan/kyushu" element={<Kyushu handleClick={handleClick} />} />
        <Route
>>>>>>> 64a89310753a5f62b658084e810eba93b963800d
          path="/travel-japan/carts"
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
