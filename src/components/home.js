import * as React from "react"
import Typewriter from 'typewriter-effect';
import "./home.scss"


const Home = () => {
  return (
    <div id="home">
        	<h1>Iskak Mantyubetov</h1>
          <h3>Full stack software engineer</h3>
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