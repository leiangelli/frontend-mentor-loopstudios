import React, { useState } from 'react'

// components
import Nav from 'components/Nav'

function Hero () {
  const html = document.querySelector('html')
  const [status, setStatus] = useState(false)

  if (status) {
    html!.style.overflow = 'hidden'
  } else {
    html!.style.overflow = ''
  }

  return (
    <div className="hero">
      <div className="l-inner">
        <h1 className="logo">
          Loopstudios
        </h1>

        <Nav class={ status ? 'is-open' : '' } />

        <div
          className={ `hamburger ${ status ? 'is-active' : '' }` }
          onClick={ () => setStatus(!status) }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h2>
          Immersive experiences that deliver
        </h2>
      </div>
    </div>
  )
}

export default Hero
