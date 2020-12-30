import * as React from "react"
import "./home.scss"
const data = require('./data')

const HomePage = () => {
  return (
    <div id="home">
        <div className="paragraph-title">
          <h3>{"<<<  "}</h3> 
          <h1>Biography</h1>
          <h3>{"  >>>"}</h3>
        </div>
        <div id="home-container">
          <div id="my-images"/>
          <div id="my-story">
            <p>{data.myStory.part1}</p>
            <br />
            <p>{data.myStory.part2}</p>
            <br />
            <p>{data.myStory.part3}</p>
            <br />
            <p>{data.myStory.part4}</p>
          </div>       
        </div> 
    </div>
  )
}

export default HomePage