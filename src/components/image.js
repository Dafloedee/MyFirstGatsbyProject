import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Imgs = styled(Img)`
max-width:70%;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
`
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Amano-Hina.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Imgs fluid={data.placeholderImage.childImageSharp.fluid}>
  </Imgs>
}

export default Image
