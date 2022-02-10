import * as React from "react"
import "./styles/Home.css"
import Tag from "../components/Tag"
import Thumb from "../components/Thumb"
import Dropdown, { DropdownLarge } from "../components/Dropdown"

export default function Header() {
  return (
      <main className="home">
        <Tag value="Test1"/>
        <Tag value="Test2"/>
        <Tag value="Test3"/>
        <Thumb text="Titre de la location" />
        <Dropdown text="Exemple" >Example</Dropdown>
        <DropdownLarge text="Exemple" >Example</DropdownLarge>
      </main>
  );
}