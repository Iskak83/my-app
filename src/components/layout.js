/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
          <Header id="header"/>
          
          <div id="main">
            <main>{children}</main> 
          </div>
          
          <footer >
              <Link href="https://www.linkedin.com/in/mantyubetov/">linkedin</Link>
          </footer>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
