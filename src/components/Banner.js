import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <a href="/kanto" target="_blank">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/homepage_1_2.jpg"
                className="d-block w-100"
                alt="深入日本"
              />
            </a>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <a href="#sales">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/homepage_2_2.jpg"
                className="d-block w-100"
                alt="開幕優惠"
              />
            </a>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <a href="/kanto" target="_blank">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/homepage_3_2.jpg"
                className="d-block w-100"
                alt="行程費用"
              />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
