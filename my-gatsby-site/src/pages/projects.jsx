import * as React from "react"
import { Link, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useState } from "react"

// Projektöversiktssida
// Minst titel, beskrivning, 3 skärmdumpar av projektet samt en länk till
// publicerad webbplats ska finnas för varje projekt och renderas
// dynamiskt (om projektet ej existerar går det bra med #-länk eller länk
// till annan valfri webbplats/sida).

// Det ska vara möjligt för användaren att filtrera projekt efter kategori. Valfritt om
// dessa ska listas på egen undersida eller i den befintliga projektöversikten.
// Kategoriseringen ska vara dynamisk och ändras med innehållet.

const ProjectsPage = ({ data }) => {
  const [category, setCategory] = useState("")
  const projectsCategory = category
    ? data.allContentfulProjectModel.edges.filter((project) =>
        project.node.projectCategory.includes(category)
      )
    : data.allContentfulProjectModel.edges

  return (
    <div className="app">
      <Header />
      <main>
        <section className="article-section">
          <div>
            <h1>My projects</h1>
          </div>
          <div>
            <h2>Categories</h2>

            {data.allContentfulProjectModel.edges.map(({ node }) => {
              return (
                <button
                  className="category-button"
                  onClick={function () {
                    setCategory(node.projectCategory)
                  }}
                >
                  <p>{node.projectCategory}</p>
                </button>
              )
            })}
          </div>
          <div className="about-me-article-div">
            {projectsCategory.map(({ node }) => {
              const image = getImage(node.projectSingleImage1)
              return (
                <Link to={`/project/${node.slug}`}>
                  <article className="my-projects-article">
                    <h2>{node.projectTitle}</h2>
                    <p>{node.projectDescription}</p>
                    <GatsbyImage
                      image={image}
                      alt={node.projectSingleImage1.description}
                    />
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage

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
export const ProjectPageQuery = graphql`
  query ProjectPageQuery {
    allContentfulProjectModel {
      edges {
        node {
          projectTitle
          projectDescription
          slug
          projectCategory
          projectSingleImage1 {
            # file {
            #   url
            # }
            description
            gatsbyImage(
              formats: WEBP
              width: 250
              outputPixelDensities: [1, 1]
              placeholder: BLURRED
              height: 200
            )
          }
        }
      }
    }
  }
`
