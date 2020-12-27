import React from "react"
// import { Link } from "gatsby"
import "./header.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
  return (
  <div id="nav-bar">
    <div id="burger">burger</div>
    <h1 id="logo">IM</h1>
    <div id="nav-links"> 
      {/* <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/hobbies">Hobbies</Link>  */}
     
							<button onClick={() => scrollTo('#home')}>Home</button>
              <button onClick={() => scrollTo('#projects')}>Projects</button>
              <button onClick={() => scrollTo('#education')}>Education</button>
              <button onClick={() => scrollTo('#hobby')}>Hobby</button>
				
					
    </div>

</div>
  )
}