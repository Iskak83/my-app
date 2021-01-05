import * as React from "react"
import './hobbies.scss'
import {myStory} from './data.js'


  const Hobby = () => {
    return (
      <div id="hobby">
          <div className="paragraph-title">
            <h3>{"<<<  "}</h3> 
            <h1>Hobby</h1>
            <h3>{"  >>>"}</h3>
          </div>
          <div id="hobby-container">
            <div id="hobby-images"/>
            <div id="hobby-story">
              <p>{myStory.part1}</p>
              <br />
              <p>{myStory.part2}</p>
              <br />
              <p>{myStory.part3}</p>
              <br />
              <p>{myStory.part4}</p>
            </div>       
          </div> 
      </div>
    )
  }
  
  export default Hobby
  