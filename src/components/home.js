import * as React from "react"
// import Typewriter from 'typewriter-effect';
import TypeWriter from './TypeWriter'
import "./home.scss"


const Home = () => {

  const texts = ['Trilinguist', 'Tennis fan','Cook', 'Pet lover', 'Hiker', 'Traveller']
  const speed = 150
  const endSpeed = 2000
  const className = 'type-writer'
  return (
    <div id="home">
      <div className="home">
        	<h1>Iskak Mantyubetov</h1>
          <h3>Full stack software engineer</h3>
          <h6>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</h6>
          <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className={className} />
            {/* <Typewriter
                options={{
                    strings: ['Trilinguist', 'Tennis fan', 'Cook', 'Pet lover', 'Hiker', 'Traveller'],
                    autoStart: true,
                    loop: true
                }} */}
            {/* /> */}
				</div>	
    </div>
  )
}

export default Home