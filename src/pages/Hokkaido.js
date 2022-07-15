import React, { useState } from "react";
import { Link } from "react-router-dom";
import HokkaidoGood from "./HokkaidoGood.json";
import Cards from "./Cards";

const goods = ({ handleClick }) => {
  return (
    <div className="goods">
      <h2>商品列表</h2>
      <div className="goods-main m0 df">
        <div className="goods-menu">
          <ul>
            <li className="li2">地區</li>
            <li className="li4">
              <Link to="/travel-japan/kanto">關東</Link>
            </li>
            <li className="li4">
              <Link to="/travel-japan/kansai">關西</Link>
            </li>
            <li className="active">
              <Link to="/travel-japan/hokkaido">北海道</Link>
            </li>
            <li className="li4">
              <Link to="/travel-japan/kyushu">九州</Link>
            </li>
          </ul>
        </div>

        <div className="goods-all df">
          <ul className="goods df">
            {HokkaidoGood.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
          </ul>
        </div>
        {/* <div className="pages-row df">
          <ul className="df">
            <li className="page page3">
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_left.png"
                  alt="前一頁"
                />
              </a>
            </li>
            <li className="page page1">
              <a href="#">1</a>
            </li>
            <li className="page page2">
              <a href="#">2</a>
            </li>
            <li className="page page2">
              <a href="#">3</a>
            </li>
            <li className="page page3">
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_right.png"
                  alt="後一頁"
                />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default goods;
