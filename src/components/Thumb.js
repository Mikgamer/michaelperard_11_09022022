import React from "react"
import { Link } from "react-router-dom"
import "./styles/Thumb.css"

export default function Thumb(props) {
  return (
    <section className="thumb">
      <img src={props.src} alt={props.text}/>
      <Link className="link" to={"/accommodation/"+props.id} draggable="false">
        <h2>{props.text}</h2>
      </Link>
    </section>
  );
}