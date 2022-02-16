import React from "react"
import { useParams } from "react-router-dom"
import accommodations from "../data/logements.json"
import Carousel from "../components/Carousel"
import Tag from "../components/Tag"
import Dropdown from "../components/Dropdown"
import { ReactComponent as Star } from '../images/star.svg'
import NoMatch from "./NoMatch"
import "./styles/Accommodation.css"

export default function Accommodation() {
  const { id } = useParams();
  const accommodation = accommodations.find(accommodation => accommodation.id === id);
  window.scrollTo(0, 0);
  if (accommodation === undefined) { return <NoMatch /> }
  return (
    <main className="accommodation">
      
      <Carousel>
        {accommodation.pictures.map((picture, index) => 
          <img src={picture} alt="" key={index} />
        )}
      </Carousel>

      <div className="flex">
        <div className="text">
          <h1>{accommodation.title}</h1>
          <h2>{accommodation.location}</h2>
          <div className="tags">
          {accommodation.tags.map((tag, index) => 
            <Tag text={tag} key={index} />
          )}
          </div>
        </div>
        <div className="review">
          <div className="host">
            <span className="name">{accommodation.host.name.split(" ")[0]}<br />{accommodation.host.name.split(" ")[1]}</span>
            <img src={accommodation.host.picture} alt="" />
          </div>
          <div className="stars">
            {[1,2,3,4,5].map(star => 
              <Star key={star} className={ star <= accommodation.rating ? "star" : null }/>
            )}
          </div>
        </div>
      </div>

      <div className="dropdowns">
        <Dropdown text="Description">{accommodation.description}</Dropdown>
        <Dropdown text="Équipements">
          <ul>
            {accommodation.equipments.map((equipment, index) => 
              <li key={index}>{equipment}</li>
            )}
          </ul>
        </Dropdown>
      </div>
    </main>
  );
}