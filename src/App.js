import { useState } from "react";
import "./App.css";
import Carousel from "./Componenets/Carousel";
import Footer from "./Componenets/Footer";

import Advertise from "./Componenets/Advertise";
import Categories from "./Componenets/Categories";
function App() {
  const [images] = useState([
    {
      url: "/Carousel-1.jpg",
      title: "موجات حر... وحرائق",
      description: "بعض التفاصيل عن الخبر المذكور",
    },
    {
      url: "/Carousel-2.jpg",
      title: "الحرب الروسية ",
      description: "بعض التفاصيل عن الخبر المذكور",
    },
    {
      url: "/Carousel-3.jpg",
      title: " موجات الحر... الى متى",
      description: "بعض التفاصيل عن الخبر المذكور",
    },
  ]);

  return (
    <div className="App">
      <div className="home">
        <div className="header">
          <h3 id="header-option">تسجيل الدخول</h3>
          <img src="/babel.png" alt="Logo" id="logo"></img>
        </div>
        <Carousel images={images} />
        <Categories />
        <hr id="sectionLine"></hr>
        <Advertise />
        <hr id="sectionLine"></hr>
        <Footer />
        <div className="doneBy">Done by Ibrahim Mneimneh</div>
      </div>
    </div>
  );
}

export default App;
