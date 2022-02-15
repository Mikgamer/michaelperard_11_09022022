import React from "react"
import "./styles/Home.css"
import Thumb from "../components/Thumb"
import accommodations from "../data/logements.json"
import decorationImage from "../images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"

export default function Home() {
  return (
      <main className="home">
        <div className="decoration">
          <img src={decorationImage} alt="" draggable="false"/>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="thumbs">
          {accommodations.map(accommodation => {
            return <Thumb text={accommodation.title} src={accommodation.cover} id={accommodation.id} key={accommodation.id} />
          })}
        </div>
      </main>
  );
}