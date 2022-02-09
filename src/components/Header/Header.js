import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { ReactComponent as Logo } from '../../images/logo.svg';

export default function Header() {
  return (
    <header>
      <Logo className="logo"/>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}