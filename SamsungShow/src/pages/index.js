import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Artist from "../components/samsung"
import "../pages/page.module.css"

const IndexPage = ({
  data: {
    wpPage: { HomePage },
  },
}) => {
  const image = getImage(HomePage.picture.localFile)

  return (
    <Layout>
      <section>
        <article>
          <h1>{HomePage.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: HomePage.description,
            }}
          />
        </article>
        <div>
          <GatsbyImage image={image} />
        </div>
      </section>
      <section>
        <h2>Featured phones</h2>
        <p>Informational website about the samsung smartphones</p>
        <div>
          {HomePage.featuredProducts.map(phones => {
            return (
              <Artist
                slug={`smartphone/${phones.slug}`}
                key={phones.id}
                artist={phones}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      HomePage {
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
            url
          }
        }
        featuredProducts {
          ... on WpSamsungSmartphone {
            id
            slug
            SamsungSmartphonesFields {
              title
              cpu
              androidVersion
              picture {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
