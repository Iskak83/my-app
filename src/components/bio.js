import * as React from "react"
import "./bio.scss"
import {myStory} from './bio-data'
// const {myStory} = require('./data')

const Bio = () => {
  return (
    <div id="bio">
        <div className="paragraph-title">
          <h3>{"<<<  "}</h3> 
          <h1>Biography</h1>
          <h3>{"  >>>"}</h3>
        </div>
        <div id="bio-container">
          <div id="my-images"/>
          <div id="my-story">
            {myStory.map( el => el)}
            
          </div>       
        </div> 
    </div>
  )
}

export default Bio