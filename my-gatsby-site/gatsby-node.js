// Hämta alla slugs från min content type för att rendera ut dynamiskt

const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const { data } = await graphql(`
    query MyQuery {
      allContentfulProjectModel {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)

    data.allContentfulProjectModel.edges.forEach(edge => {
        actions.createPage({
            // URL
            path: '/project/' + edge.node.slug,
            // Template
            component: path.resolve('./src/templates/project.jsx'),
            context: { slug: edge.node.slug}
        })
    })
}

