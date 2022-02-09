import * as React from "react";
import "./Footer.css"
import { ReactComponent as Logo } from '../../images/logo.svg';

export default function Header() {
  return (
    <footer>
      <Logo className="logo"/>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}