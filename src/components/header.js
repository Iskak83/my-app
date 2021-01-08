import React from "react"
import "./header.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
  return (
  <div id="nav-bar">
    <div id="nav-left">
      <div id="nav-logo">
        <div id="burger">
          <div id="lineOne"></div>
          <div id="lineTwo"></div>
          <div id="lineThree"></div>
        </div>
        
        <button onClick={() => scrollTo('#home')} id="logo" >im</button>
      </div>
      <div id="divider"/>
    </div>
    <div id="nav-links"> 
     
							<button onClick={() => scrollTo('#bio')}>Bio</button>
              <button onClick={() => scrollTo('#projects')}>Projects</button>
              <button onClick={() => scrollTo('#education')}>Education</button>
              <button onClick={() => scrollTo('#hobby')}>Hobbies</button>
				
					
    </div>

</div>
  )
}