import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import FoodItemPage from "./pages/FoodItemPage";
import Navbar from "./components/navbar";

import { useUserState } from "./Context/UserContext";

function App() {
  const { isAuthenticated } = useUserState();
  if (!isAuthenticated) {
    return (
      <div className="App">
        <Navbar />
        <Router primary={false}>
          <HomePage path="/" />
          <SearchPage path="/search" />
          <FoodItemPage path="/foodItem/:foodName" />
        </Router>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Router primary={false}>
        <HomePage path="/" />
        <SearchPage path="/search" />
        <ProfilePage path="/profile" />
        <FoodItemPage path="/foodItem/:foodName" />
      </Router>
    </div>
  );
}

export default App;
