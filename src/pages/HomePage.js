import React from "react";
import Header from './Header';
import Contact from './Contact';
import Product from './Product';
import About from './About';

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Product/>
      <About/>
      <Contact/>

      <div style={{
        height:"15px",
        textAlign:"center",
      }}>
        <p>Copyright &copy; FoodPedia 2021</p>
      </div>
    </div>
  );
}
