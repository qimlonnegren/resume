import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContactPage = ({ data }) => {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="contact-section">
          <h1>Contact</h1>

          {data.allContentfulContactModel.edges.map(({ node }) => {
            const image = getImage(node.contactImage)
            return (
              <article className="contact-article">
                <div className="top-contact-article-div">
                  <GatsbyImage
                    image={image}
                    alt={node.contactImage.description}
                  />
                </div>
                <div className="bottom-contact-article-div">
                  <button>
                    <a
                      href={node.contactSocialLink1}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      href={node.contactSocialLink2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </button>
                  <h2>Got questions? Don't hesitate to contact me</h2>
                  <span>
                    <a href={node.contactEmail}>{node.contactEmail}</a>
                  </span>
                </div>
              </article>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage

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
    <title>Contact Page</title>
  </>
)

//  GraphQL Query
export const query = graphql`
  query ContactPageQuery {
    allContentfulContactModel {
      edges {
        node {
          contactEmail
          contactSocialLink1
          contactSocialLink2
          contactImage {
            file {
              url
            }
            description
            gatsbyImage(
              formats: WEBP
              placeholder: BLURRED
              width: 250
              height: 250
            )
          }
        }
      }
    }
  }
`
