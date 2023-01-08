import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhonePage = ({
  data: {
    wpSamsungSmartphone: { SamsungSmartphonesFields: phone },
  },
}) => {
  const image = getImage(phone.picture.localFile)

  return (
    <Layout pageTitle="smartphone">
      <div>
        <GatsbyImage image={image} />
        <h3>phone: {phone.title}</h3>
        <h3>size: {phone.size}</h3>
        <h3>android version: {phone.androidVersion}</h3>
        <h3>cpu: {phone.cpu}</h3>
        <h3>resoultion: {phone.resolution}</h3>
        <h3>Ram memory: {phone.ramMemory}</h3>
        <h3>battery capacity: {phone.batteryCapacity}</h3>
        <h3>weight: {phone.weight}</h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpSamsungSmartphone(id: { eq: $id }) {
      SamsungSmartphonesFields {
        title
        description
        androidVersion
        cpu
        resolution
        ramMemory
        batteryCapacity
        size
        weight
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
`

export default PhonePage
