import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="main df m0">
      <div className="sales df">
        <h2>優惠內容</h2>
        <p id="sales" className="sales-content">
          新開幕優惠！ <br />
          全館購買5個行程（不限地區），其中1個讓
          <span>深入日本</span>招待！
        </p>
        <a href="/travel-japan/kanto" className="btn-sales">
          前往探索
        </a>
      </div>

      <div className="container m0">
        <h2>熱門地區</h2>
        <div className="container-box box1 df">
          <div className="zoomIn">
            <div className="container-img df">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/kanto.jpg"
                alt="關東地區"
              />
            </div>
          </div>
          <div className="container-word df">
            <h3>關東</h3>
            <p>
              關東地方是指日本本州中部偏東瀕太平洋的地區，由茨城縣、栃木縣、群馬縣、埼玉縣、千葉縣、東京都、神奈川縣所構成，有時還會加上山梨縣。其以東京為中心，居住人口超過4千3百萬，聚集超過日本三分之一的人口。
            </p>
            <Link to="/travel-japan/kanto" className="btn-sales">
              深入關東
            </Link>
          </div>
        </div>
        <div className="container-box box2 df">
          <div className="container-word df">
            <h3>關西</h3>
            <p>
              近畿地方又稱為關西地方，是日本本州中西部的一個地理區域，由京都府、大阪府、滋賀縣、兵庫縣、奈良縣、和歌山縣、三重縣等二府五縣構成。
            </p>
            <Link to="/travel-japan/kanto" className="btn-sales">
              深入關西
            </Link>
          </div>
          <div className="zoomIn">
            <div className="container-img">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/kansai.jpg"
                alt="關西地區"
              />
            </div>
          </div>
        </div>
        <div className="container-box box2m df">
          <div className="zoomIn">
            <div className="container-img">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/kansai.jpg"
                alt="關西地區"
              />
            </div>
          </div>
          <div className="container-word df">
            <h3>關西</h3>
            <p>
              近畿地方又稱為關西地方，是日本本州中西部的一個地理區域，由京都府、大阪府、滋賀縣、兵庫縣、奈良縣、和歌山縣、三重縣等二府五縣構成。
            </p>
            <Link to="/travel-japan/kansai" className="btn-sales">
              深入關西
            </Link>
          </div>
        </div>
        <div className="container-box box3 df">
          <div className="zoomIn">
            <div className="container-img">
              <img
                src="https://carolblogtw.com/wp-content/uploads/2022/07/hokkaido.jpg"
                alt="北海道地區"
              />
            </div>
          </div>
          <div className="container-word df">
            <h3>北海道</h3>
            <p>
              北海道是日本最北的一級行政區，亦是日本現時唯一以「道」為名的行政區劃，首府為札幌市。全境包含數個北方島嶼，面積共83423.84平方公里，是日本面積最大的一級行政區。
            </p>
            <Link to="/travel-japan/hokkaido" className="btn-sales">
              深入北海
            </Link>
          </div>
        </div>
      </div>
      <div className="why">
        <h2>為何選擇我們</h2>
        <div className="why-row df">
          <div className="why-box df">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1233/1233255.png"
              alt=""
            />
            <p>幫你找最能深入玩日本的行程，絕非市面上常見的行程！</p>
          </div>
          <div className="why-box df">
            <img src="https://img.icons8.com/stickers/344/cheap.png" alt="" />
            <p>行程特別之餘，也盡量幫你壓低價格，讓你買到高CP值行程。</p>
          </div>
          <div className="why-box df">
            <img
              src="https://img.icons8.com/external-microdots-premium-microdot-graphic/344/external-japanese-japan-microdots-premium-microdot-graphic.png"
              alt=""
            />
            <p>參加我們的行程，絕對會讓你說：「哇！日本竟然可以這樣玩」。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
