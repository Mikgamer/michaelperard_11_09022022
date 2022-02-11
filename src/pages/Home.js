import React from "react"
import "./styles/Home.css"
import Tag from "../components/Tag"
import Thumb from "../components/Thumb"
import Dropdown, { DropdownLarge } from "../components/Dropdown"
import Carousel from "../components/Carousel";

export default function Header() {
  return (
      <main className="home">
        <Tag value="Test1"/>
        <Tag value="Test2"/>
        <Tag value="Test3"/>
        <Thumb text="Titre de la location" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg" id="b4c67936" />
        <Dropdown text="Exemple" >Example</Dropdown>
        <DropdownLarge text="Exemple" >Example</DropdownLarge>
        <Carousel>
          <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg" alt="" />
          <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg" alt="" />
          <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg" alt="" />
          <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg" alt="" />
        </Carousel>
      </main>
  );
}