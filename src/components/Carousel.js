import React, { useState } from "react"
import "./styles/Carousel.css"
import { ReactComponent as Arrow } from '../images/arrow.svg'

export default function Carousel(props) {
  const [carousel, setCarousel] = useState(0);

  // Use images for items
  let slides = props.children;

  if (Array.isArray(props.children) && props.children.length > 1) {
    slides = props.children[carousel]
    // If props.children is an array, it mean there is multiple elements, then a navigation is shown 
    slides = <>
      <button className="previous" onClick={() => {
          if (carousel <= 0) {
            setCarousel(props.children.length - 1)
          } else { setCarousel(carousel - 1) }
        }}>
        <Arrow />
      </button>
      {slides}
      <button className="next" onClick={() => {
        if (carousel >= props.children.length - 1) {
          setCarousel(0)
        } else { setCarousel(carousel + 1) }
      }}>
        <Arrow />
      </button>
    </>
  }

  return (
    <div className="carousel">
      {slides}
    </div>
  );
}