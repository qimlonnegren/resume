import * as React from "react"
// import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"
// import nodemon from "nodemon"


//  Startsida, rubrik, presentationstext och en bild ska renderas dynamiskt

const IndexPage = () => {
  return (
    <div className="app">
      <Header />
    
      <main>
        <section>
          <h1>Qim Lönnegren</h1>
          <h2>Welcome to my portfolio</h2>
          <img src="" alt="" />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>

