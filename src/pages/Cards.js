import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, price, img, tag } = item;

  // if (tag === "") {
  //   document.getElementById("tag").className = " ";
  // }

  return (
    <li className="item">
      <img src={img} alt={title} className="goodsimg" />
      <p id="tag" className="tag">
        {tag}
      </p>
      {/* <a href="#">
        <img
          className="favorite"
          src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/favorite_border.png"
          alt="favorite"
        />
      </a> */}
      <div className="nameprice df">
        <p className="name">{title}</p>
        <p className="price">NT$ {price}</p>
      </div>
      <button
        type="button"
        class="btn btn-sales"
        onClick={() => handleClick(item)}
      >
        加入購物車
      </button>
    </li>
  );
};

export default Cards;
