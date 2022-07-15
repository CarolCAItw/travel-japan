import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoodsData from "./AllGoods.json";
import { Table } from "reactstrap";

const goods = () => {
  return (
    <div className="goods">
      <h2>商品列表</h2>
      <div className="goods-main m0 df">
        <div className="goods-menu">
          <ul>
            <li className="li2">地區</li>
            <li className="active">
              <Link to="/goods">關東</Link>
            </li>
            <li className="li4">
              <Link to="/goods2">關西</Link>
            </li>
            <li className="li4">
              <Link to="/">北海道</Link>
            </li>
            <li className="li4">
              <Link to="/">九州</Link>
            </li>
          </ul>
        </div>

        <div className="goods-all df">
          <ul className="goods df">
            {GoodsData.map((good) => {
              return (
                <li className="item">
                  <img src={good.img} alt="甜點1" className="goodsimg" />
                  <p className="tag">{good.tag}</p>
                  <a href="#">
                    <img
                      className="favorite"
                      src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/favorite_border.png"
                      alt="favorite"
                    />
                  </a>
                  <div className="nameprice df">
                    <p className="name">{good.title}</p>
                    <p className="price">{good.price}</p>
                  </div>
                  <button type="button" class="btn btn-sales">
                    加入購物車
                  </button>
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            購物車內的商品
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <Table>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>品項</th>
                                <th>價格</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>300</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>150</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>900</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            繼續購物
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            結帳
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
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
