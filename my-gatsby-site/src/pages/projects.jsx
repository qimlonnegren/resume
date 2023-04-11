import * as React from "react"
import { Link, graphql } from "gatsby"
// import { graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Projektöversiktssida
// Minst titel, beskrivning, 3 skärmdumpar av projektet samt en länk till
// publicerad webbplats ska finnas för varje projekt och renderas
// dynamiskt (om projektet ej existerar går det bra med #-länk eller länk
// till annan valfri webbplats/sida).

// Det ska vara möjligt för användaren att filtrera projekt efter kategori. Valfritt om
// dessa ska listas på egen undersida eller i den befintliga projektöversikten.
// Kategoriseringen ska vara dynamisk och ändras med innehållet.

const ProjectsPage = ({ data }) => {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="article-section">
          <div>
            <h1>My projects</h1>
          </div>
          <div className="about-me-article-div">
            {data.allContentfulProjectModel.edges.map(({ node }) => {
              const image = getImage(node.projectSingleImage1)
              return (
                <Link to={`/project/${node.slug}`}>
                  <article className="my-projects-article">
                    {/* <Link to={`./project/${pokemon.name}/ability/${ability.name}`}> */}
                    <h2>{node.projectTitle}</h2>
                    <p>{node.projectDescription}</p>
                    <GatsbyImage
                      image={image}
                      alt={node.projectSingleImage1.description}
                    />
                  </article>
                  {/* Click here to view</Link> */}
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

export const Head = () => <title>Projects</title>

//  GraphQL Query
export const ProjectPageQuery = graphql`
  query ProjectPageQuery {
    allContentfulProjectModel {
      edges {
        node {
          projectTitle
          projectDescription
          slug
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
