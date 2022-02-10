import * as React from "react"
import "./styles/Tag.css"

export default function Tag(props) {
  return (
    <span className="tag">
      {props.value}
    </span>
  );
}