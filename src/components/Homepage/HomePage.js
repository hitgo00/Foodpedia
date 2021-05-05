import React from "react";
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import About from '../About/About';

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
