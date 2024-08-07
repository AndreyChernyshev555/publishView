import React, { useState, useEffect } from "react";
import SlideIndicator from "./SlideIndicator.jsx";
import "./Slider.scss";
import imSlide1 from "../../img/slider_images/home_page_slide1.png";
import imSlide2 from "../../img/slider_images/home_page_slide2.jpg";
import imSlide3 from "../../img/slider_images/home_page_slide3.jpg";
import imSlide4 from "../../img/slider_images/home_page_slide4.jpg";
import arrLeft from "../../img/icons/arrow-left.svg";
import arrRight from "../../img/icons/arrow-right.svg";

const images = [imSlide1, imSlide2, imSlide3, imSlide4];

export default function Slider() {
  const widthProportion = window.matchMedia("screen and (max-width: 480px)")
    .matches
    ? 1920 / 1920
    : 1120 / 1920;
  const heightProportion = window.matchMedia("screen and (max-width: 480px)")
    .matches
    ? 1920 / 1920
    : 560 / 1920;
  const lastIndex = images.length - 1;
  const [currImg, setCurrImg] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      rightClick();
    }
    if (diff < -5) {
      leftClick();
    }
    setTouchPosition(null);
  };

  const leftClick = function () {
    if (currImg > 0) setCurrImg((currImg) => currImg - 1);
    else setCurrImg(lastIndex);
  };
  const rightClick = function () {
    if (currImg < lastIndex) setCurrImg((currImg) => currImg + 1);
    else setCurrImg(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currImg < lastIndex) setCurrImg((currImg) => currImg + 1);
      else setCurrImg(0);
    }, 7000);
    return () => clearInterval(interval);
  }, [currImg]);

  const [size, setSize] = useState({
    width: widthProportion * window.innerWidth,
    height: heightProportion * window.innerWidth,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        width: widthProportion * window.innerWidth,
        height: heightProportion * window.innerWidth,
      });
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const imageList = images.map((image) => (
    <div
      className="slide_carousel-imgs-item"
      style={{
        backgroundImage: `url(${image})`,
        width: `${size.width}px`,
        backgroundSize: "cover",
        backgroundPosition: "64%",
      }}
    />
  ));

  return (
    <div
      className="slider"
      style={{ width: `${size.width}px`, height: `${size.height}px` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="slide_filter-left"
        style={{ height: `${size.height}px` }}
      ></div>
      <div
        className="slide_filter-right"
        style={{ height: `${size.height}px` }}
      ></div>
      <div
        className="slide_carousel-imgs"
        style={{
          transform: `translateX(-${currImg * size.width}px)`,
          width: `${size.width * 4}px`,
          height: `${size.height}px`,
        }}
      >
        {imageList}
      </div>
      <div className="slide_button-left" onClick={leftClick}>
        <img src={arrLeft} />
      </div>
      <div className="slide_button-right" onClick={rightClick}>
        <img src={arrRight} />
      </div>
      <SlideIndicator amount={4} light={currImg} />
    </div>
  );
}
