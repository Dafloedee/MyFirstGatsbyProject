import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const tombolsosial = () => {
    return (
    <div style={{ textAlign: `left` }}>
    <a
      style={{
        fontSize: `1.5em`,
        padding: `0em 0em`,
        paddingRight: `0.5em`,
        color: `blue`,
        boxShadow: `none`,
      }}
      href={`https://facebook.com/davinkurnia`}
    >
      <FontAwesomeIcon icon={faFacebook} title='Facebook'/>
    </a>    
    <a
      style={{
        fontSize: `1.5em`,
        padding: `0em 0.5em`,
        color: `blue`,
        boxShadow: `none`,
      }}
      href={`https://twitter.com/reniviel`}
    >
      <FontAwesomeIcon icon={faTwitter} title='Twitter'/>
    </a>
    <a
      style={{
        fontSize: `1.5em`,
        padding: `0em 0.5em`,
        color: `blue`,
        boxShadow: `none`,
      }}
      href={`https://instagram.com/davin_kurnia`}
    >
      <FontAwesomeIcon icon={faInstagram} title='Instagram'/>
    </a>
    <a
      style={{
        fontSize: `1.5em`,
        padding: `0em 0.5em`,
        color: `blue`,
        boxShadow: `none`,
      }}
      href={`https://github.com/Dafloedee`}
    >
      <FontAwesomeIcon icon={faGithub} title='GitHub'/>
    </a>
  
  </div>
  )
}

export default tombolsosial
//export default Image
