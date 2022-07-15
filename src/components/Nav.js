import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Form } from "reactstrap";
import AuthService from "../services/auth.service";

const Nav = ({ setShow, size }, props) => {
  const { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("登入成功！將前往首頁");
    setCurrentUser(null);
    navigate("/travel-japan/");
  };
  return (
    <nav className="all df">
      <div className="logo df">
        {" "}
        <Link to="/travel-japan/">深入日本</Link>
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
          {!currentUser && (
            <li>
              <Link to="/travel-japan/login">登入</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to="/travel-japan/member">會員中心</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link onClick={handleLogout} to="#">
                登出
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
