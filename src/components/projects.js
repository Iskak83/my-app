import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faLink } from '@fortawesome/free-solid-svg-icons';
import useScrollPosition from '@react-hook/window-scroll';
import './projects.scss';
const {projects} = require('./data')

const Projects = () => {
  const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollY = useScrollPosition(60);

  return (
    
      <div id="projects">
        <img src={require("../images/project.png")} alt="" className="project-img"/>

        {projects.map( (el, inx) => (
        <div id="project-container" key={inx}>
          <div className="connecter-arrow"></div>
          <div id={scrollY > 1020+(inx/2.5*1000) && scrollY < 2050+(inx/2.5*1000) ? el.class : "project-hiden"}>
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
