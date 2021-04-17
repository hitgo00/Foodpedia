import React from "react";
import { GoogleLogin } from "react-google-login";
import "./home.css";

const responseGoogle = (response) => {
  console.log(response);
};

const Header = function Header() {
  return (
    <div className="banner">
      {/* <img alt="logo" src={index} /> */}
      <GoogleLogin
        className="login"
        clientId="850634064633-r2q201m4thuruahn6fc82nl21o0b14dl.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <div className="title">
        <h3>FoodPedia</h3>
        <h4>Count Memories Not Calories</h4>
      </div>
    </div>
  );
};

export default Header;
