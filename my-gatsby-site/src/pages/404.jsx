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
        <section>
        <h1>404</h1>
      <h2>Oops, something strange happened. Cannot find what your are looking for</h2>
      <Link to="/">Press here to go to home page</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

