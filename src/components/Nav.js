import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ setShow, size }) => {
  return (
    <nav className="all df">
      <div className="logo df">
        {" "}
        <Link to="/">深入日本</Link>
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-sakura-chinese-new-year-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
          alt="logo"
        />
      </div>
      <div className="menu">
        <ul className="df">
          <li>
            <Link to="/travel-japan/">首頁</Link>
          </li>
          <li>
            <Link to="/travel-japan/about">關於我們</Link>
          </li>
          <li>
            <Link to="/travel-japan/kanto" onClick={() => setShow(true)}>
              全部商品
            </Link>
          </li>
          <li>
            <Link to="/travel-japan/carts" onClick={() => setShow(false)}>
              購物車
              <span className="cart-num"> {size}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
