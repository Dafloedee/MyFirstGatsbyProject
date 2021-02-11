import PropTypes from "prop-types"
import React from "react"
import NavbarLinks from "./navbarLinks";

const Header = ({ siteTitle }) => (
  <header
    style={{
      boxShadow:`0 4px 6px -6px`,
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      
      }}
    >
      <div
      style={{
        position: `relative`,
        zIndex: 6,
        right:300,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem`,
      }}
    ><NavbarLinks></NavbarLinks></div>
        

    </div>
  </header>
)




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header
