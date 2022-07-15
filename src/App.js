import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import Member from "./pages/member";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import AuthService from "./services/auth.service";
import "./styles/style.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
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
      <Nav
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setShow={setShow}
        size={cart.length}
      />
      <Banner />
      <Routes>
        <Route path="/travel-japan/" element={<Homepage />} />
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
          path="/travel-japan/carts"
          element={
            <Carts cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
        <Route path="/travel-japan/register" element={<RegisterComponent />} />
        <Route
          path="/travel-japan/login"
          element={
            <LoginComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/travel-japan/member"
          element={
            <Member currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
