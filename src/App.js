import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router primary={false}>
        <HomePage path="/" />
        <SearchPage path="/search" />
        <ProfilePage path="/profile" />
      </Router>
    </div>
  );
}

export default App;
