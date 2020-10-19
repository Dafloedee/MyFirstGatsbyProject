/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
         
        }}
      >
        <main>{children}</main>
       
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/* <footer style={{
          marginTop: `2rem`,
          color: `white`,
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <opening2>Gatsby</opening2>
        </footer> */