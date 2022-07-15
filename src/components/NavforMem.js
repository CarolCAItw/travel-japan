import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Form } from "reactstrap";
import AuthService from "../services/auth.service";

const NavforMem = (props) => {
  const { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("登出成功！將前往首頁");
    setCurrentUser(null);
    navigate("/travel-japan/");
  };
  return (
    <nav className="df nav2-all">
      <div className="nav2-menu">
        <ul className="df">
          {!currentUser && (
            <li>
              <Link to="/travel-japan/login">會員登入／註冊</Link>
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

export default NavforMem;
