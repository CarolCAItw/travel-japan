import React from "react";

const About = () => {
  return (
    <div className="main df m0">
      <div className="about">
        <h2>關於我們</h2>
        <div className="about-box df">
          <div className="zoomIn">
            <div className="about-img">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/about_1.jpg"
                alt="關於深入日本"
              />
            </div>
          </div>
          <div className="about-word df">
            <p>
              我們是一群由喜愛日本的台灣人所組成，因為喜歡自由行，也知道自由行對某些人來說，並不是那麼方便，但是又覺得市面上的一日遊行程沒特色，所以決定自己開發新路線！
            </p>
          </div>
        </div>
        <div className="about-box box-m df">
          <div className="zoomIn">
            <div className="about-img">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/about_2.jpg"
                alt="關於本旅遊網站"
              />
            </div>
          </div>
          <div className="about-word df">
            <p>
              我們親自搜集景點、聯絡日本旅行社，組出最能深度遊日本的行程，致力讓大家能玩到不一樣的日本！
              <br />
              日本去一百次都不膩！！！
            </p>
          </div>
        </div>
        <div className="about-box box-c df">
          <div className="about-word df">
            <p>
              我們親自搜集景點、聯絡日本旅行社，組出最能深度遊日本的行程，致力讓大家能玩到不一樣的日本！
              <br />
              日本去一百次都不膩！！！
            </p>
          </div>
          <div className="zoomIn">
            <div className="about-img">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/about_2.jpg"
                alt="關於本網站"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
