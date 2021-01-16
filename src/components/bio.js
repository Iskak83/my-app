import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {myStory} from './bio-data'
import RotateImages from './RotateImages'
import "./bio.scss"



const Bio = () => {

  const [readBttn, setReadBttn] = React.useState(true);
  
  function toggleBttn(){
    if(!readBttn) scrollTo('#bio')
    setReadBttn(!readBttn)    
  }

  const images = [`ala-archa.png`, `parade.png`,
  `buckingham.png`, `virtual-grad.png`]
  
  const imgInfo = ['Ala-Archa Mountain, Kyrgyzstan', `Parade 2019, NYC`,
  `Buckingham Palace, London`, `Fullstack virtual graduation, South Orange`]

  return (
    <div id="bio">
        <div className="paragraph-title">
          <h3>{"<<<  "}</h3> 
          <h1>Biography</h1>
          <h3>{"  >>>"}</h3>
        </div>
        {/* <RotatImages images={images} className="rotate-images"/> */}
        <div id="bio-container">

          {/* <div id="my-images"/> */}
          <RotateImages images={images} imgInfo={imgInfo}/>
          <div id="my-story">
            {readBttn ? myStory[0]: myStory.map( el=> el)}
            
            <button type='button' onClick={()=> toggleBttn()}>{readBttn ? (  'read more...' ): '...read less'}</button>
          </div>       
        </div> 
    </div>
  )
}

export default Bio