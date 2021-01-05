import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import useScrollPosition from '@react-hook/window-scroll';
import './projects.scss';
import {projects} from './data'

const Projects = () => {
  
  const scrolly = useScrollPosition(60);


  return (
    
      <div id="projects">
        <img src={require("../images/project.png")} alt="" className="project-img"/>
        <div className="project-container">

          {projects.map( (el, inx) => (
          
            <div id={el.class}>
            {/* <div id={scrolly > 1700+(inx/2.5*1000) && scrolly< 2720+(inx/2.5*1000) ? el.class : "project-hiden"}> */}
            
              <div id={el.img}/>
              <div className="project-details">
              
                {/* <h2 className="name-of-project">{el.name}</h2> */}
                
                <div className="project-links">
                  <a href={el.gitHub} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={el.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              
              <p className="project-description">{el.description}</p>
              <p>{el.bulletPoints.one}</p>
              <p>{el.bulletPoints.two}</p>
              <p>{el.bulletPoints.three}</p>
              
              <p className="project-tools">stack: {el.tools}</p>

            </div>
          </div>
        
          ))}

        </div>
      </div>
   
  )
}

export default Projects
