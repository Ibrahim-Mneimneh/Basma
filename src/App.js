import { useState, useEffect } from "react";
import "./App.css";
import Carousel from "./Componenets/Carousel";
import Footer from "./Componenets/Footer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Advertise from "./Componenets/Advertise";
import Categories from "./Componenets/Categories";
import MobileCarousel from "./Componenets/MobileCarousel";
import Auth from "./Componenets/Auth";
import BasicModal from "./Componenets/Modal";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
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
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 900) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="home">
        <div className="header">
          <BasicModal />

          <img src="/babel.png" alt="Logo" id="logo"></img>
        </div>
        {showMenu ? (
          <MobileCarousel images={images} />
        ) : (
          <Carousel images={images} />
        )}
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
