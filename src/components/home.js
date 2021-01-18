import * as React from "react"
import TypeWriter from './TypeWriter'
import {LanguageContext}  from '../pages/index'
import "./home.scss"


const Home = () => {

  const {state, change} = React.useContext(LanguageContext)

  const language = state.language 
  const titles = language === "english" ? {name: 'Iskak Mantyubetov', profession: 'Full stack software engineer'} : {name: 'Искак Мантюбетов', profession: 'Инженер-программист полного цикла'}
  const texts = language === "english" ? ['Trilinguist', 'Tennis fan','Cook', 'Pet lover', 'Hiker', 'Traveller'] : ['Трилингвист', 'Фанат тенниса', 'Кулинар', 'Любитель домашних животных', 'Любитель гор', 'Путешественник' ]


  const speed = 150
  const endSpeed = 2000
  const className = 'type-writer'
  
  return (
    <div id="home">
      <div className="home">
        	<h1>{titles.name}</h1>
          <h3>{titles.profession}</h3>
          <h6>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</h6>
          <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className={className} />
            {/* <Typewriter
                options={{
                    strings: ['Trilinguist', 'Tennis fan', 'Cook', 'Pet lover', 'Hiker', 'Traveller'],
                    autoStart: true,
                    loop: true
                }}
            /> */}
				</div>	
    </div>
  )
}

export default Home