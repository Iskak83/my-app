import * as React from "react"
import "./bio.scss"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {myStory} from './bio-data'



const Bio = () => {
  const [readBttn, setReadBttn] = React.useState(true);
  function toggleBttn(){
    if(!readBttn) scrollTo('#bio')
    setReadBttn(!readBttn)  
    
  }

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
            {readBttn ? myStory(readBttn)[0]: myStory(readBttn).map( el=> el)}
            
            <button type='button' onClick={()=> toggleBttn()}>{readBttn ? (  'read more...' ): '...read less'}</button>
          </div>       
        </div> 
    </div>
  )
}

export default Bio