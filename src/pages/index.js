import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"



const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
  <Imgs
  fluid={props.data.indexImage.childImageSharp.fluid}>
  </Imgs>
  <container>
      <opening>This Site Under Building</opening>
    </container>
  </Layout>
)

export default IndexPage

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
    indexImage: file(relativePath: { eq: "Chaldea.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
