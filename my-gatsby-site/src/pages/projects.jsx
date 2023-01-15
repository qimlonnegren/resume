import * as React from "react"
// import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"

// Projektöversiktssida
// Minst titel, beskrivning, 3 skärmdumpar av projektet samt en länk till
// publicerad webbplats ska finnas för varje projekt och renderas
// dynamiskt (om projektet ej existerar går det bra med #-länk eller länk
// till annan valfri webbplats/sida).

const ProjectsPage = ({ data }) => {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Hello Projects</h1>
        <section className="article-section">
        {data.allContentfulProjectModel.edges.map(({ node }) => (
          <article>
            <h2>{node.projectTitle}</h2>
            <p>{node.projectDescription}</p>
          </article>
        ))}

        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage

export const Head = () => <title>Projects</title>

//  GraphQL Query
export const query = graphql` 
query ProjectPageQuery {
  allContentfulProjectModel {
    edges {
      node {
        projectTitle
        projectDescription
      }
    }
  }
}
`;
