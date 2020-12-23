import * as React from "react"
import Layout from "../components/layout"
import "./index.scss"
import img1 from "../images/ala-archa.jpg"
import img2 from "../images/cat.jpg"
import img3 from "../images/nitto-final.jpg"
import img4 from "../images/vertual-grad.jpg"

// styles




// markup
const Home = () => {
  return (
      <Layout>
        <div id="edu-container">
            <h1 >
                Welcome to my webpage!
                <br />
            </h1>
            <div className="my-images"/>
                 
        </div>
    </Layout>
  )
}

export default Home