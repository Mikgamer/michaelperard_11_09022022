import * as React from "react"
import "./styles/Dropdown.css"
import { ReactComponent as Arrow } from '../images/arrow.svg'

export default function Dropdown(props) {
  return (
    <details className="dropdown">
      <summary>{props.text}<Arrow /></summary>
      <div>
        {props.children}
      </div>
    </details>
  );
}