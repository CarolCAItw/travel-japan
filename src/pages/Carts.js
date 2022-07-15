import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import OrderService from "../services/order.service";

const Carts = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const navigate = useNavigate();
  const OrderPush = () => {
    OrderService.post();
    window.alert("訂單提交成功！");
    navigate("/travel-japan/member/");
  };
  return (
    <div className="carts-main">
      <h2>購物車內容</h2>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="incre-decre">
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}人</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="price-remove df">
            <span className="price">NT$ {item.price}</span>
            <button onClick={() => handleRemove(item.id)} className="remove">
              移除
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span className="total-word">總計</span>
        <span className="total-price">NT$ {price}</span>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal">
          結帳
        </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                確認結帳
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              請再次確認行程與數量是否正確！
              <table>
                <tr>
                  <th width="35%" height="30px">
                    行程
                  </th>
                  <th width="10%">人數</th>
                  <th width="15%">單價</th>
                </tr>
                {cart.map((item) => (
                  <tr>
                    <td height="30px"> {item.title}</td>
                    <td height="30px"> {item.amount} 人</td>
                    <td height="30px">NT$ {item.price}</td>
                  </tr>
                ))}
              </table>
              <p>總價：NT$ {price}</p>
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
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={OrderPush}
              >
                前往結帳
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        x
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                確認結帳
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              請再次確認行程與數量是否正確！
              <table>
                <tr>
                  <th width="35%" height="30px">
                    行程
                  </th>
                  <th width="10%">人數</th>
                  <th width="15%">單價</th>
                </tr>
                {cart.map((item) => (
                  <tr>
                    <td height="30px"> {item.title}</td>
                    <td height="30px"> {item.amount} 人</td>
                    <td height="30px">NT$ {item.price}</td>
                  </tr>
                ))}
              </table>
              <p>總價：NT$ {price}</p>
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
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={OrderPush}
              >
                前往結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
