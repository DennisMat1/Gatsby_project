import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhonesPage = ({
  data: {
    allWpSamsungSmartphone: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Smartphone lijst om op te klikken">
      {edges.map(item => {
        const phone = item.node.SamsungSmartphonesFields
        const slug = item.node.slug
        const image = getImage(phone.picture.localFile)
        return (
          <Link to={`/smartphone/${slug}`}>
            {" "}
            <p key={item.id}>
              {phone.title}:
              <GatsbyImage image={image} />
              {phone.weight}
            </p>{" "}
          </Link>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpSamsungSmartphone {
      edges {
        node {
          SamsungSmartphonesFields {
            title
            weight
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          id
          slug
        }
      }
    }
  }
`

export default PhonesPage
