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
import Tombolsosial from "../components/sosialmedia"
import Image from "../components/image"

import content2 from "../components/content_2"
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
         
        }}
      >
        <main>
          <div class = "margintop">
          <div class = "row">
            <div class = "container">
              <Image></Image>
              <opening>Davin Kurnia Hiuredhy</opening>
              <br></br><br></br>
              <subopening>Saya adalah <i>Developer</i> yang suka mencoba hal baru bukan hanya di dunia IT tapi desain dan berbagai bidang lainnya.</subopening>
          
              <div class = "Content2">
                <follow>Saya aktif main sosial media dibawah ini lhuu...</follow>
              </div>
              <div class = "Sosmed">
                <Tombolsosial></Tombolsosial>
              </div>
            </div>
            
            <div class="line"></div>
            <div class = "container2">
            <div class = "containermenu2">
                <div class = "box">
                  <div class = "row">
                    <div class = "menupositition">
                      <p>New</p>
                    </div>
                    <div class = "menupositition">
                    <p>Top</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class = "postpage">
                <h2>A Simple Guide to Dark Mode with Gatsby.js</h2>
                <div class = "metadata">
                  <date>NOVEMBER 16, 2020</date>
                  <div class = "categorymargin">
                    <category><a href = "https://victorzhou.com/tag/web-development/">WEB DEVELOPMENT</a></category>
                  </div>
                </div>
                <div class = "description">
                  <p>Everything you need to know to setup Dark Mode for your site.</p>
                </div>
                <div class = "read">
                  <read><a href = "https://victorzhou.com/tag/web-development/">Read</a></read>
                </div>
              </div>
              <div class = "postpage">
                <h2>Keras for Beginners: Implementing a Recurrent Neural Network</h2>
                <div class = "metadata">
                  <date>NOVEMBER 16, 2020</date>
                  <div class = "categorymargin">
                    <category><a href = "https://victorzhou.com/tag/python/">PHYTON</a></category>
                  </div>
                </div>
                <div class = "description">
                  <p>A beginner-friendly guide on using Keras to implement a simple Recurrent Neural Network (RNN) in Python.</p>
                </div>
                <div class = "read">
                  <read><a href = "https://victorzhou.com/blog/keras-rnn-tutorial/">Read</a></read>
                </div>
              </div>
              <div class = "postpage">
                <h2>A Simple Explanation of the Bag-of-Words Model</h2>
                <div class = "metadata">
                  <date>JANUARY 30, 2019</date>
                  <div class = "categorymargin">
                    <category><a href = "https://victorzhou.com/tag/python/">PHYTON</a></category>
                  </div>
                </div>
                <div class = "description">
                  <p>A quick, easy introduction to the Bag-of-Words model and how to implement it in Python.</p>
                </div>
                <div class = "read">
                  <read><a href = "https://victorzhou.com/blog/bag-of-words/">Read</a></read>
                </div>
              </div>
              <div class = "postpage">
                <h2>Neural Networks From Scratch</h2>
                <div class = "metadata">
                  <date>JANUARY 30, 2019</date>
                  <div class = "categorymargin">
                    <category><a href = "https://victorzhou.com/tag/python/">PHYTON</a></category>
                  </div>
                </div>
                <div class = "description">
                  <p>A 4-post series that provides a fundamentals-oriented approach towards understanding Neural Networks.</p>
                </div>
                <div class = "read">
                  <read><a href = "https://victorzhou.com/series/neural-networks-from-scratch/">Read</a></read>
                </div>
              </div>
            </div> 
          </div>
          </div>  
          
          
        </main>
       
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