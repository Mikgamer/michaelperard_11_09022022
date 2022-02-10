import * as React from "react"
import "./styles/Thumb.css"

export default function Thumb(props) {
  return (
    <div className="thumb">
      <img src={props.src || ""} alt={props.alt || ""}/>
      <div>
        <h2>{props.text}</h2>
      </div>
    </div>
  );
}