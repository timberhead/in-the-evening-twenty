import React from 'react'
import {
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
  GitHub,
} from '@mui/icons-material'

import '../pages/styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
		<a
          href="/"
          target="_blank"
        >
          <button className="btn btn-1">
            <Instagram />
          </button>
        </a>

        <a
          href="/"
          target="_blank"
        >
          <button className="btn btn-1">
            <Twitter />
          </button>
        </a>

        <a
          href="/"
          target="_blank"
        >
          <button className="btn btn-1">
            <Facebook />
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/christopher-boyle-96b017245/"
          target="_blank"
        >
          <button className="btn btn-1">
            <LinkedIn />
          </button>
        </a>

        <a href="https://www.github.com/timberhead" target="_blank">
          <button className="btn btn-1">
            <GitHub />
          </button>
        </a>
      </div>
      <p> &copy; 2022 cbwebdevelopers.com 💣</p>
    </div>
  )
}

export default Footer
