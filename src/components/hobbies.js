import * as React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import RotateImages from './RotateImages'
import {hobbies} from './bio-data.js'
import './hobbies.scss'

const Hobby = () => {

  const [readBttn, setReadBttn] = React.useState(true);

  function toggleBttn(){
    if(!readBttn) scrollTo('#hobby')
    setReadBttn(!readBttn)    
  }
  const images = [`gym.jpg`, `centre-court.jpg`,
  `nitto-final.jpg`, `homemade-sausage.jpg`]
  const imgInfo = ['LA Fitness, Baltimore', 'Centre Court in Wimbledon, London', 'ATP Nitto-Final in O2, London', 'Sage Wrap Beef, Gordon Ramsay recipe']
    return (
      <div id="hobby">
          <div className="paragraph-title">
            <h3>{"<<<  "}</h3> 
            <h1>  Hobbies  </h1>
            <h3>{"  >>>"}</h3>
          </div>
          <div id="hobby-container">
            <RotateImages images={images} imgInfo={imgInfo} anime={'slide'} />
            {/* <div id="hobby-images"/> */}
            <div id="hobby-story">
            {readBttn ? (hobbies[0]): hobbies.map( el=> el)}
            
            <button type='button' onClick={()=> toggleBttn()}>{readBttn ? 'read more...' : '...read less'}</button>
            </div>       
          </div> 
      </div>
    )
  }
  
  export default Hobby
  