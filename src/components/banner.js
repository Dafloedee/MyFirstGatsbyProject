import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Banner = (props) => (
    <banner>
        <Imgs
            fluid={props.placeholderImage.childImageSharp.fluid}>
        </Imgs>
        <div class = "container">
            <opening>Hello, My Name is Davin Kurnia</opening>
            <subopening><br></br>Im a full stack engineer who passionate to make something great</subopening>
        </div>
    </banner>
    
)


const Imgs = styled(BackgroundImage)`
  margin-top:-100px;
  height:667px;
  z-index : -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
`

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "Home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Banner
