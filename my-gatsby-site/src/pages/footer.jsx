import * as React from "react"
// Import global CSS file from styles
import "../styles/global.css"
// import nodemon from "nodemon"

const Footer = () => {
  return (
    <footer>
      <section class="footer-section-why-us-social-links">
          <h3>Social links</h3>
          <ul>
            <li>
              <a href="https://github.com/qimlonnegren">
                Github
                <i class="fa-brands fa-github" aria-label="Link button to github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                Linkedin
                <i class="fa-brands fa-linkedin-in" aria-label="Link button to linkedin"></i>
                </a>
            </li>
          </ul>
      </section>
    </footer>
  )
}

export default Footer

export const Head = () => <title>Startsida</title>

