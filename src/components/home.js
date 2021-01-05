import * as React from "react"
import Typewriter from 'typewriter-effect';
import "./home.scss"


const Home = () => {
  return (
    <div id="home">
        	<h2>Iskak Mantyubetov</h2>
          <h4>Full stack software engineer</h4>
          <h6>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</h6>
            <Typewriter
                options={{
                    strings: ['Trilinguist', 'Tennis fan', 'Cook', 'Pet lover', 'Hiker', 'Traveller'],
                    autoStart: true,
                    loop: true
                }}
            />
						
    </div>
  )
}

export default Home