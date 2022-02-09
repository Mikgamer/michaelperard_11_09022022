import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
import { ReactComponent as Logo } from '../../images/logo.svg';

export default function Header() {
  return (
    <header>
      <Logo className="logo"/>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}