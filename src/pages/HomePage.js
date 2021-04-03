import React from "react";
import { GoogleLogin } from "react-google-login";
import index from "../index.png";

const responseGoogle = (response) => {
  console.log(response);
};

export default function HomePage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img alt="logo" src={index} />
      <GoogleLogin
        clientId="850634064633-r2q201m4thuruahn6fc82nl21o0b14dl.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}
