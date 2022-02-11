import React from "react"
import { Link } from "react-router-dom"
import "./styles/Thumb.css"

export default function Thumb(props) {
  return (
    <div className="thumb">
      <img src={props.src || ""} alt={props.alt || ""}/>
      <Link className="link" to={"/accommodation/"+props.id} draggable="false">
        <h2>{props.text}</h2>
      </Link>
    </div>
  );
}