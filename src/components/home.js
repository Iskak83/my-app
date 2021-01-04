import * as React from "react"
import Typewriter from 'typewriter-effect';
import "./home.scss"


const Home = () => {
  return (
    <div id="home">
        	<h2>Iskak Mantyubetov</h2>
            <Typewriter
                options={{
                    strings: ['Software Engineer', 'Hiker', 'Cook', 'Pet lover', 'Traveller', 'Tennis fan'],
                    autoStart: true,
                    loop: true
                }}
            />
						
    </div>
  )
}

export default Home