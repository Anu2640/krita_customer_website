import React from 'react';
import { useEffect,useState,useRef} from "react";
import {v4 as uuidv4} from 'uuid'
import "./index.css";
const images = [
  {imgUrl:"https://media.istockphoto.com/id/1399204533/vector/mega-sale-special-offer-neon-10-off-sale-banner-sign-board-promotion-vector-illustration.jpg?s=612x612&w=0&k=20&c=zLKXFGLhCbQWEiMicFeEEopzrCieWOvY-JNWjzGGlKs=",id:uuidv4()},
  {imgUrl:"https://media.istockphoto.com/id/1399204532/vector/mega-sale-special-offer-neon-20-off-sale-banner-sign-board-promotion-vector.jpg?s=612x612&w=0&k=20&c=O9LajAuqOBeUEJ5_S1j3HRrte3vEdudHc1l30pA4HLk=",id:uuidv4()},
  {imgUrl:"https://media.istockphoto.com/id/1435546181/vector/mega-sale-special-offer-neon-35-off-sale-banner-sign-board-promotion-vector.jpg?s=612x612&w=0&k=20&c=8AZuWtNIAYAoqfOmDb4oGSfJ_175XypW3Dt-nUyQ3_o=",id:uuidv4()},
  {imgUrl:"https://media.istockphoto.com/id/1425474381/vector/mega-sale-special-offer-neon-50-off-sale-banner-sign-board-promotion-vector.jpg?s=612x612&w=0&k=20&c=tJlwyyfgGE8cLHEEdVuRvV_POpcQZunDqNY47Q9v1dg=",id:uuidv4()},
  {imgUrl:"https://media.istockphoto.com/id/1396735855/vector/mega-sale-special-offer-neon-55-off-sale-banner-sign-board-promotion-vector.jpg?s=612x612&w=0&k=20&c=8-6ZpOKZz273ofcjmIQxPC2Z_MdE3UyGG65Ho1xP4dU=",id:uuidv4()}
]
function Carousell() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeOutRef.current);
    timeOutRef.current =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOutRef);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.imgUrl} alt={image.id} />
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Carousell;