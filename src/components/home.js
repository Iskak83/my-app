import React, { useContext}from "react"
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import TypeWriter from './TypeWriter'
import {LanguageContext}  from '../pages/index'
import "./home.scss"


const Home = () => {

  const {state} = useContext(LanguageContext)

  const language = state.language 

  const titles = language === "english" ? {name: 'Iskak Mantyubetov', profession: 'Full stack software engineer'} : {name: 'Искак Мантюбетов', profession: 'Инженер-программист полного цикла'}
  
  const texts = language === "english" ? ['Trilinguist', 'Tennis fan','Cook', 'Pet lover', 'Hiker', 'Traveller'] : ['Трилингвист', 'Фанат тенниса', 'Повар-Кулинар', 'Любитель домашних животных', 'Горный турист', 'Путешественник' ]


  const speed = 50
  const endSpeed = 2000
  const className = 'type-writer'
  return (
		<StaticQuery
			query={graphql`
				query {
					desktop: file(relativePath: { eq: "home-page.jpg" }) {
						childImageSharp {
							fluid(quality: 90, maxWidth: 1920) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			`}
			render={(data) => {
        console.log('>>>>>>>home>>>>>', data)
        const imageData = data.desktop.childImageSharp.fluid;
        
				return (
          <div id="home">
					<BackgroundImage
						Tag="section"
						className="home"
						fluid={imageData}
						backgroundColor={`#333`}
					>
              <h1>{titles.name}</h1>
                <h3>{titles.profession}</h3>
                <h6>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</h6>
                <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className={className} />
   
					</BackgroundImage>
          </div>
				);
			}}
		/>
	);
  
  // return (
  //   <div id="home">
  //      <img alt="" src={`ala-archa.png`} className='image'/>
  //     <div className="home">
  //       	<h1>{titles.name}</h1>
  //         <h3>{titles.profession}</h3>
  //         <h6>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</h6>
  //         <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} className={className} />
	// 			</div>	
  //   </div>
  // )
}

export default Home