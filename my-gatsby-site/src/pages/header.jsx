import * as React from "react"
// Import global CSS file from styles
import "../styles/global.css"
// import nodemon from "nodemon"
import { Link } from "gatsby"

// En huvudmeny i någon form ska implementeras med länkar till webbplatsens olika
// sidor.

const Header = () => {
  return (
    <header>
      <span>
        <p>Qim.L</p>
      </span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/about-me/">About me</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/404/">404</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

export const Head = () => <title>Startsida</title>
