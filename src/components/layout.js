/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import "./layout.scss"
import useScrollPosition from '@react-hook/window-scroll';

const Layout = ({ children }) => {
  const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollY = useScrollPosition(60);
  const toTopBttnVisible = scrollY > 3900 ? "to-top-bttn-shown" : "to-top-bttn-hidden";
  console.log('>>>>>>', window.pageYOffset)
  return (
    <div className="layout">
      
          <Header id="header"/>
          
          <div id="main">
            <main>{children}</main> 
          </div>

          <div id={toTopBttnVisible}>
              <button type="button"  onClick={scrollTop} className="scroll-to-top-bttn">
                  <FontAwesomeIcon icon={faAngleUp} />
              </button>
          </div>

          <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
