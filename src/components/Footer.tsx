import React from 'react'

// components
import Sitemap from 'components/Sitemap'

// images
import facebook from '@/assets/images/icon-facebook.svg'
import twitter from '@/assets/images/icon-twitter.svg'
import pinterest from '@/assets/images/icon-pinterest.svg'
import instagram from '@/assets/images/icon-instagram.svg'

function Footer () {
  return(
    <footer>
      <div className="l-inner">
        <div className="logo"></div>

        <Sitemap />

        <ul className="social-media">
          <li>
            <a href="#">
              <img src={ facebook }  alt="facebook" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={ twitter } alt="twitter" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={ pinterest } alt="pinterest" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={ instagram } alt="instagram" />
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