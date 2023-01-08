import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Phone = ({ artist, slug }) => {
  const profile = getImage(artist.SamsungSmartphonesFields.picture.localFile)
  return (
    <Link to={slug}>
      <GatsbyImage image={profile} />
      <article>
        <p>Phone title: {artist.SamsungSmartphonesFields.title}</p>
        <p> cpu: {artist.SamsungSmartphonesFields.cpu}</p>
        <p>
          {" "}
          android version: {artist.SamsungSmartphonesFields.androidVersion}
        </p>
      </article>
    </Link>
  )
}

export default Phone
