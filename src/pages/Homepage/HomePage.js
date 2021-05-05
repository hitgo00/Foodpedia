import React from "react";
import Header from '../../components/Header/Header'
import Contact from '../../components/Contact/Contact';
import Product from '../../components/Product/Product';
import About from '../../components/About/About';

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
