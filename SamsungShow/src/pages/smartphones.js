import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PhonesPage = ({
  data: {
    allWpSamsungSmartphone: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Smartphones">
      {edges.map(item => {
        const artist = item.node.SamsungSmartphonesFields
        return <p key={item.node.id}>{artist.title}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpSamsungSmartphone {
      edges {
        node {
          id
          SamsungSmartphonesFields {
            title
          }
        }
      }
    }
  }
`

export default PhonesPage
