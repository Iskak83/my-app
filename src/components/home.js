import * as React from "react"
import Typewriter from 'typewriter-effect';
import "./home.scss"


const Home = () => {
  return (
    <div id="home">
        	<h3>Iskak Mantyubetov</h3>
          <h6>Full stack software engineer</h6>
          <p>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</p>
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