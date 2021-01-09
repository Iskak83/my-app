import React, { useState } from "react"
import "./header.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
  const [burger, setBurger] = useState(true)
  function onClick(idName){
    if(!burger)setBurger(true)
    if(idName !== '') scrollTo(idName)
  }

  return (
  <div id="nav-bar">
    <div id="nav-left">
      <div id="nav-logo">
        <div id="burger-container">
          <button onClick={() => setBurger(!burger)} id={burger ? "burger" : "x"}>
          
            <div id="lineOne"></div>
            <div id="lineTwo"></div>
            <div id="lineThree"></div>
          </button>
        </div>
        
        <button onClick={() => onClick('#home')} id="logo" >im</button>
      </div>
      <div id="divider"/>
    </div>
    <div id={!burger ? "nav-links" : "nav-links-mobile"}> 
     
							<button onClick={() => onClick('#bio')}>Bio</button>
              <button onClick={() => onClick('#projects')}>Projects</button>
              <button onClick={() => onClick('#education')}>Education</button>
              <button onClick={() => onClick('#hobby')}>Hobbies</button>
				
					
    </div>

</div>
  )
}