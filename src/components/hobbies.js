import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {hobbies} from './bio-data.js'
import './hobbies.scss'

  const Hobby = () => {

  const [readBttn, setReadBttn] = React.useState(true);

  function toggleBttn(){
    if(!readBttn) scrollTo('#hobby')
    setReadBttn(!readBttn)    
  }
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
            {readBttn ? (hobbies[0]): hobbies.map( el=> el)}
            
            <button type='button' onClick={()=> toggleBttn()}>{readBttn ? 'read more...' : '...read less'}</button>
            </div>       
          </div> 
      </div>
    )
  }
  
  export default Hobby
  