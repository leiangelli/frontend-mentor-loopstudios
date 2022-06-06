import React from 'react'

// components
import Sitemap from 'components/Sitemap'

function Footer () {
  return(
    <footer>
      <div className="l-inner">
        <div className="logo"></div>

        <Sitemap />

        <ul className="social-media">
          <li>
            <a href="#">
              <img src="src/assets/images/icon-facebook.svg" alt="facebook" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="src/assets/images/icon-twitter.svg" alt="twitter" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="src/assets/images/icon-pinterest.svg" alt="pinterest" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="src/assets/images/icon-instagram.svg" alt="instagram" />
            </a>
          </li>
        </ul>

        <p>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer