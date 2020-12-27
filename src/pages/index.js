import * as React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo';
import Home from '../components/home';
import Projects from '../components/projects';
import Education from '../components/education';
import Hobby from '../components/hobbies'

import "./styles.scss"

const IndexPage = () => {
  return (
      <Layout>
        <SEO title='Iskak Mantyubetov'/>
        <Home/>
        <Projects/>
        <Education />
        <Hobby />
    </Layout>
  )
}

export default IndexPage