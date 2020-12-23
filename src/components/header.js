import React from "react"
import { Link } from "gatsby"
import "./header.scss"


export default function Header() {
  return (
  <div id="nav-bar">
    <div id="burger">burger</div>
    <h1 id="logo">IM</h1>
    <div id="nav-links"> 
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/hobbies">Hobbies</Link> 
    </div>

</div>
  )
}