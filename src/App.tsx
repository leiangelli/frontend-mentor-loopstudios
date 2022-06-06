import '@/styles/app.scss'

import React from 'react'

// components
import Hero from '@/components/Hero'
import Leader from '@/components/Leader'
import Creations from '@/components/Creations'
import Footer from '@/components/Footer'

function App () {
  return (
    <>
      <main className="main">
        <Hero />
        <Leader />
        <Creations />
      </main>

      <Footer />
    </>
  )
}

export default App
