import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo df">
        {" "}
        <Link to="/">深入日本</Link>
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/344/external-sakura-chinese-new-year-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
          alt="logo"
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/travel-japan/">首頁</Link>
          </li>
          <li>
            <Link to="/travel-japan/about">關於我們</Link>
          </li>
          <li>
            <Link to="/travel-japan/kanto">全部商品</Link>
          </li>
          <li>
            <Link to="/travel-japan/carts">購物車</Link>
          </li>
        </ul>
      </div>
      <p>
        深入日本 2022 ©<br />
        此為個人作品集，無商業行為
      </p>
    </div>
  );
};

export default Footer;
