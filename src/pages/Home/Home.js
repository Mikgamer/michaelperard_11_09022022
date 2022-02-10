import * as React from "react";
import "./Home.css"
import Tag from "../../components/Tag/Tag"
import Thumb from "../../components/Thumb/Thumb"

export default function Header() {
  return (
      <main className="home">
        <Tag value="Test1"/>
        <Tag value="Test2"/>
        <Tag value="Test3"/>
        <Thumb text="Titre de la location" />
      </main>
  );
}