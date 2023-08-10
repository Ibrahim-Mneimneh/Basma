import { useState, useEffect } from "react";
import "./../Styles/Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const backgroundImageUrl = images[currentIndex].url;

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            handleImageLoad();
            resolve();
          };
          img.src = image.url;
        });
      });
      Promise.all(imagePromises).then(() => {
        goToSlide(0);
      });
    };

    preloadImages();
  }, [images]);

  const handleImageLoad = () => {
    const sliderElement = document.querySelector(".slider");
    if (sliderElement) {
      sliderElement.classList.add("loaded");
    }
  };
  return (
    <div
      className="sliderStyles"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: 40,
        marginLeft: 40,
      }}
    >
      <div className="navbar">
        <div className="nav-item">
          <a href="/about">اراء</a>
          <div className="separator"></div>
        </div>
        <div className="nav-item">
          <a href="/about">فيديو وصور</a>
          <div className="separator"></div>
        </div>
        <div className="nav-item">
          <a href="/about">ثقافة</a>
          <div className="separator"></div>
        </div>
        <div className="nav-item">
          <a href="/about">رياضة</a>
          <div className="separator"></div>
        </div>
        <div className="nav-item">
          <a href="/about">اقتصاد</a>
          <div className="separator"></div>
        </div>
        <div className="nav-item">
          <a href="/about">اخبار</a>
          <div className="separator"></div>
        </div>
        <div className="nav-item">
          <a href="/about">الرئيسة</a>
        </div>
      </div>
      {false ? (
        <div>
          <div
            onClick={goToSlide(currentIndex - 1)}
            className="leftArrowStyles"
          >
            ❰
          </div>
          <div
            onClick={goToSlide(currentIndex + 1)}
            className="rightArrowStyles"
          >
            ❱
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="slideStyles"></div>
      <div className="title-desc">
        <span>{images[currentIndex].title}</span>
        <hr></hr>
        <p>{images[currentIndex].description}</p>
        <div className="button-container">
          <button className="more">المزيد</button>
        </div>
      </div>
      <div className="dotsContainerStyles">
        {images.map((image, id) => (
          <div
            className="dotStyle"
            key={id}
            onClick={() => goToSlide(id)}
            style={{ color: currentIndex === id ? "#E64227" : "#fff" }}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
