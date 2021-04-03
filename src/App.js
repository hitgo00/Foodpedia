import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/navbar";



import {GoogleLogin} from "react-google-login";

const responseGoogle=response=>{
  console.log(response)
}

function App() {
  return (
    <div className="App">
      
     <Navbar />
      <Router primary={false}>
        <HomePage path="/" />
       
        <SearchPage path="/search" />
        <ProfilePage path="/profile" />
      </Router> 
      <GoogleLogin
    clientId="850634064633-r2q201m4thuruahn6fc82nl21o0b14dl.apps.googleusercontent.com"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    />
    </div>
  );
}

export default App;
