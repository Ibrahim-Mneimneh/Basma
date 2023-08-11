import { useState } from "react";
import "./../Styles/Carousel.css";
function MobileCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const backgroundImageUrl = images[currentIndex]?.url;
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length-1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
      <div
        className={`burger-menu ${openMenu ? "active" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className={`bar ${openMenu ? "active" : ""}`} />
        <div className={`bar ${openMenu ? "active" : ""}`} />
        <div className={`bar ${openMenu ? "active" : ""}`} />
      </div>

      {openMenu ? (
        <div className={`mobile-menu ${openMenu ? "active" : ""}`}>
          <div className="mobile-menu-item">
            <a href="/about">الرئيسة</a>
          </div>
          <div className="mobile-menu-item">
            <a href="/about">ثقافة</a>
          </div>
          <div className="mobile-menu-item">
            <a href="/about">رياضة</a>
          </div>
          <div className="mobile-menu-item">
            <a href="/about">اقتصاد</a>
          </div>
          <div className="mobile-menu-item">
            <a href="/about">اخبار</a>
          </div>
          <div className="mobile-menu-item">
            <a href="/about">فيديو وصور</a>
          </div>
          <div className="mobile-menu-item">
            <a href="/about">اراء</a>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        <div
          onClick={() => {
            goToPrevious();
          }}
          className="leftArrowStyles"
        >
          ❰
        </div>
        <div
          onClick={() => {
            goToNext();
          }}
          className="rightArrowStyles"
        >
          ❱
        </div>
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
    </div>
  );
}

export default MobileCarousel;
