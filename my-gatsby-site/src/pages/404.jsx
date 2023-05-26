import * as React from "react"
import { Link } from "gatsby"
// import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"

const NotFoundPage = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="error-page-section">
          <h1>404</h1>
          <h2>
            Oops, something strange happened. Cannot find what your are looking
            for.
          </h2>
          <Link to="/">Back to home page</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <meta
      name="description"
      content="Frontend developer student projects portfolio."
    />
    <meta
      name="keywords"
      content="HTML5, CSS, JavaScript, React, Gatsby, graphQl, frontend developer student, frontend"
    />
    <title>Not found</title>
  </>
)
