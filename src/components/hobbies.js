import * as React from "react"
import './hobbies.scss'
import {hobbies} from './bio-data.js'


  const Hobby = () => {
    return (
      <div id="hobby">
          <div className="paragraph-title">
            <h3>{"<<<  "}</h3> 
            <h1>  Hobbies  </h1>
            <h3>{"  >>>"}</h3>
          </div>
          <div id="hobby-container">
            <div id="hobby-images"/>
            <div id="hobby-story">
              {hobbies.map(el => el)}
            </div>       
          </div> 
      </div>
    )
  }
  
  export default Hobby
  