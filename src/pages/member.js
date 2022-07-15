import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div>需要登入才能查看會員中心！</div>}
      {currentUser && (
        <div>
          <h2>會員中心</h2>
          <br />
          {/* <div className="member-order">
            <h3>您的訂單</h3>
            <p></p>
          </div> */}
          <div className="member-data">
            <h3>會員資料</h3>
            <br />
            <p>
              <strong>姓名：{currentUser.user.username}</strong>
              <br />
              <br />
              <strong>email: {currentUser.user.email}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
