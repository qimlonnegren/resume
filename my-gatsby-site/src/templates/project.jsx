import * as React from "react"
import { graphql } from "gatsby"
import Footer from "../pages/footer"
import Header from "../pages/header"
// Import global CSS file from styles
import "../styles/global.css"

const SingleProjectPage = ({ data }) => {
  const project = data.contentfulProjectModel
  const image1 = project.projectSingleImage1.gatsbyImage.images
  const image2 = project.projectSingleImage2.gatsbyImage.images
  const image3 = project.projectSingleImage3.gatsbyImage.images
  const image1Fallback = image1.fallback
  const image2Fallback = image2.fallback
  const image3Fallback = image3.fallback

  return (
    <div className="app">
      <Header />

      <main>
        <article className="single-project-article">
          <h1>{project.projectTitle}</h1>
          <p>{project.projectDescription}</p>
          <a target="_blank" href={project.projectLink}>
            <p>{project.projectLink}</p>
          </a>

          <picture>
            <source
              srcSet={image1Fallback.srcSet}
              sizes={image1Fallback.sizes}
              type="image/webp"
            />
            <img
              src={project.projectSingleImage1}
              alt={project.projectSingleImage1.description}
            />
          </picture>
          <picture>
            <source
              srcSet={image2Fallback.srcSet}
              sizes={image2Fallback.sizes}
              type="image/webp"
            />
            <img
              src={project.projectSingleImage2.url}
              alt={project.projectSingleImage2.description}
            />
          </picture>
          <picture>
            <source
              srcSet={image3Fallback.srcSet}
              sizes={image3Fallback.sizes}
              type="image/webp"
            />
            <img
              src={project.projectSingleImage3.url}
              alt={project.projectSingleImage3.description}
            />
          </picture>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default SingleProjectPage

export const Head = () => <title>Single Project</title>

export const query = graphql`
  query SingleProjectQuery($slug: String) {
    contentfulProjectModel(slug: { eq: $slug }) {
      projectTitle
      projectDescription
      projectLink
      projectSingleImage1 {
        file {
          url
        }
        description
        gatsbyImage(formats: WEBP, width: 250, outputPixelDensities: [1, 1])
      }
      projectSingleImage2 {
        file {
          url
        }
        description
        gatsbyImage(formats: WEBP, width: 250, outputPixelDensities: [1, 1])
      }
      projectSingleImage3 {
        file {
          url
        }
        description
        gatsbyImage(formats: WEBP, width: 250, outputPixelDensities: [1, 1])
      }
    }
  }
`
