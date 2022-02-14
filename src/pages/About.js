import React from "react"
import "./styles/About.css"
import { DropdownLarge } from "../components/Dropdown"
import decorationImage from "../images/kalen-emsley-Bkci_8qcdvQ-unsplash.png"

export default function About() {
  return (
      <main className="about">
        <div className="decoration">
          <img src={decorationImage} alt="" draggable="false"/>
        </div>
        <div className="dropdowns">
          <DropdownLarge text="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </DropdownLarge>
          <DropdownLarge text="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </DropdownLarge>
          <DropdownLarge text="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </DropdownLarge>
          <DropdownLarge text="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </DropdownLarge>
        </div>
      </main>
  );
}