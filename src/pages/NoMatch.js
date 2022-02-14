import React from "react"
import { Link } from "react-router-dom"
import "./styles/NoMatch.css"

export default function NoMatch() {
  return (
      <main className="nomatch">
        <h1>404</h1>
        <h2>Oups! La page que<br /> vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
  );
}