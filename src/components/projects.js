import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faLink } from '@fortawesome/free-solid-svg-icons';
import './projects.scss';
const {projects} = require('./data')

const Projects = () => {
  return (
    
      <div id="projects">
        <img src={require("../images/project.png")} alt="" class="project-img"/>

        {projects.map( el => (
        <div id="project-container">
          <div className="connecter-arrow"></div>
          <div className='project-container'>
            <div className={el.class}/>
            
              <div className="project-details">
              
                <h3 className="name-of-project">{el.name}</h3>
                
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
              
              <p className="project-tools">stack: {el.tools}</p>

            </div>
          </div>
         </div>
        ))}
        
      </div>
   
  )
}

export default Projects
