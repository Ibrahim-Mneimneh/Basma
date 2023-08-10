import React from "react";
import { useState, useEffect } from "react";
import "./../Styles/Categories.css";
function Categories() {
  const [categories, setCategories] = useState([
    {
      name: "اقتصاد",
      visits: 0,
      imageUrl: "http://localhost:3000/economy.jpg",
      url: "",
    },
    {
      name: "رياضة",
      visits: 0,
      imageUrl: "http://localhost:3000/sports.jpg",
      url: "",
    },
    {
      name: "اخبار",
      visits: 100,
      imageUrl: "http://localhost:3000/Carousel-2.jpg",
      url: "",
    },
    {
      name: "فيديو وصور",
      visits: 0,
      imageUrl: "http://localhost:3000/Carousel-1.jpg",
      url: "",
    },
    {
      name: "ثقافة",
      visits: 0,
      imageUrl: "http://localhost:3000/culture.jpg",
      url: "",
    },
  ]);
  useEffect(() => {
    const newCategories = [...categories];
    setCategories(
      newCategories.sort((a, b) => {
        if (a.visits > b.visits) {
          return -1;
        }
        if (a.visits < b.visits) {
          return 1;
        }
        return 0;
      })
    );
    console.log(categories);
  }, []);
  return (
    <div className="category-container">
      {categories.map((category, id) => (
        <div className={id === 2 ? " category-right" : "category"} key={id}>
          <div className={id === 2 ? "imageContainer-right" : "imageContainer"}>
            <img
              src={category.imageUrl}
              className="categoryImage"
              alt={id + "-image"}
            ></img>
          </div>
          <div className="categoryInfo">
            <span>{category.name}</span>
            <button className="more">المزيد</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
