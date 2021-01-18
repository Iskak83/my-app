/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect} from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import "./layout.scss"


const Layout = ({ children }) => {

  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    window.onscroll = function(){

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
    setScrolled(winScroll)
  }}, [])

  const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toTopBttnVisible = scrolled > 4200 ? "to-top-bttn-shown" : "to-top-bttn-hidden";
  
  return (
    <div className="layout">
        
          <div id="main">
            <main>{children}</main> 
          </div>

            <div id={toTopBttnVisible}>
              <button type="button"  onClick={scrollTop} className="scroll-to-top-bttn">
                  <FontAwesomeIcon icon={faAngleUp} />
              </button>
          </div> 

    </div>  
   
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
