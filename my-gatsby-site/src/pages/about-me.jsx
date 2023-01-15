import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
// Import global CSS file from styles
import "../styles/global.css"
// import nodemon from "nodemon"


//  Startsida, rubrik, presentationstext och en bild ska renderas dynamiskt

const AboutMePage = ({ data }) => {
  return (
    <div className="app">
      <Header />
    
      <main>
        <section>
          <h1>About me</h1>
          <img src="" alt="" />

          <h2>Education</h2>
          <section className="article-section">
            {data.allContentfulEducationModel.edges.map(({ node }) => (
              <article>
                <h3>{node.educationTitle}</h3>
                <p>{node.educator}</p>
                <p>{node.educationStartDate}</p>
                <p>{node.educationEndDate}</p>
                <p>{node.educationLength}</p>
                <p>{node.educationLocation}</p>
                <p>{node.educationDescription}</p>
              </article>
            ))}
          </section>
          <h4>Work experience</h4>
          <section className="article-section">
            {data.allContentfulWorkModel.edges.map(({ node }) => (
              <article>
                <h3>{node.workTitle}</h3>
                <p>{node.employer}</p>
                <p>{node.workStartDate}</p>
                <p>{node.workEndDate}</p>
                <p>{node.workLength}</p>
                <p>{node.workLocation}</p>
                <p>{node.workDescription}</p>
              </article>
            ))}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutMePage

export const Head = () => <title>About</title>


//  GraphQL Query
export const query = graphql` 
query AboutMeQuery {
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
`;


