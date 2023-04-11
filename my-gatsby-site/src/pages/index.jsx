import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//  Startsida, rubrik, presentationstext och en bild ska renderas dynamiskt

const IndexPage = ({ data }) => {
  const front = data.contentfulFrontPageInfo
  const image = getImage(front.frontImage)
  return (
    <div className="app">
      <Header />
      <main className="index-main">
        <GatsbyImage image={image} alt={front.frontImage.description} />
        <section className="index-section">
          <h1>{front.frontHeading}</h1>
          <p>{front.frontParagraph}</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <meta
      name="description"
      content="Frontend developer student protfolio for projects."
    />
    <meta
      name="keywords"
      content="HTML5, CSS, JavaScript, React, Gatsby, graphQl, frontend developer student"
    />
    <title>Home</title>
  </>
)

//  GraphQL Query
export const query = graphql`
  query IndexPageQuery {
    contentfulFrontPageInfo {
      frontParagraph
      frontImage {
        description
        gatsbyImage(
          formats: WEBP
          layout: FIXED
          placeholder: BLURRED
          cropFocus: CENTER
          breakpoints: 100
          width: 1500
          height: 400
        )
      }
      frontHeading
    }
  }
`
