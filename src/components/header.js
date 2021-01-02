import React from "react"
// import { Link } from "gatsby"
import "./header.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
  return (
  <div id="nav-bar">
    <div id="divider">
    <div id="burger">burger</div>
    <div id="logo">im</div>
    </div>
    <div id="nav-links"> 
     
							<button onClick={() => scrollTo('#bio')}>Bio</button>
              <button onClick={() => scrollTo('#projects')}>Projects</button>
              <button onClick={() => scrollTo('#education')}>Education</button>
              <button onClick={() => scrollTo('#hobby')}>Hobby</button>
				
					
    </div>

</div>
  )
}