import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//  Startsida, rubrik, presentationstext och en bild ska renderas dynamiskt

const AboutMePage = ({ data }) => {
  const owner = data.contentfulOwnerModel
  const image = getImage(owner.ownerImage)

  return (
    <div className="app">
      <Header />

      <main>
        <h1>About me</h1>
        <section>
          <section className="about-me-section">
            <div className="about-me-top-div">
              <h2>
                {owner.firstName} {owner.lastName}
              </h2>
              <p>- {owner.ownerTitle}</p>
              <p>- {owner.ownerDescription}</p>
              <p>- {owner.ownerTrivia}</p>
            </div>
            <div className="about-me-top-div">
              <GatsbyImage
                image={image}
                alt={data.contentfulOwnerModel.ownerImage.description}
              />
            </div>
          </section>

          <section className="article-section">
            <div>
              <h3>Education</h3>
            </div>
            <div className="about-me-article-div">
              {data.allContentfulEducationModel.edges.map(({ node }) => (
                <article className="about-me-article">
                  <p>{node.educationTitle}</p>
                  <p>{node.educator}</p>
                  <p>
                    {node.educationStartDate} - {node.educationEndDate}
                  </p>
                  <p>{node.educationLength} years</p>
                  <p>{node.educationLocation}</p>
                  <p>{node.educationDescription}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="article-section">
            <div>
              <h4>Work experience</h4>
            </div>
            <div className="about-me-article-div">
              {data.allContentfulWorkModel.edges.map(({ node }) => (
                <article className="about-me-article">
                  <p>{node.workTitle}</p>
                  <p>{node.employer}</p>
                  <p>
                    {node.workStartDate} - {node.workEndDate}
                  </p>
                  <p>{node.workLength} years</p>
                  <p>{node.workLocation}</p>
                  <p>{node.workDescription}</p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutMePage

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
    <title>Projects</title>
  </>
)

//  GraphQL Query
export const query = graphql`
  query AboutMeQuery {
    contentfulOwnerModel(firstName: { eq: "Qim" }) {
      id
      ownerDescription
      lastName
      firstName
      ownerTitle
      ownerTrivia
      ownerImage {
        file {
          url
        }
        description
        gatsbyImage(
          formats: WEBP
          width: 250
          outputPixelDensities: [1, 1]
          placeholder: BLURRED
          height: 250
        )
      }
    }

    allContentfulEducationModel {
      edges {
        node {
          educationDescription
          educationEndDate
          educationLength
          educationLocation
          educationStartDate
          educationTitle
          educator
        }
      }
    }
    allContentfulWorkModel {
      edges {
        node {
          employer
          workDescription
          workEndDate
          workLength
          workLocation
          workStartDate
          workTitle
        }
      }
    }
  }
`
