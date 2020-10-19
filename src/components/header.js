import PropTypes from "prop-types"
import React from "react"
import NavbarLinks from "./navbarLinks";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem`,
      }}
    >
      
        <NavbarLinks></NavbarLinks>

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
