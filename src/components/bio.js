import * as React from "react"
import "./bio.scss"
const {myStory} = require('./data')

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

export default Bio