import React from 'react'

// hooks
import deviceInfo from 'hooks/device-info'
import imagePc from '@/assets/images/desktop/image-interactive.jpg'
import imageMb from '@/assets/images/mobile/image-interactive.jpg'


function Leader () {
  const device = deviceInfo()
  const deviceWidth = device?.width ?? 0
  
  return (
    <div className="leader">
      <div className="l-inner">
        <img
          src={ deviceWidth > 991 ?  imagePc : imageMb }
          alt="image-interactive"
        />

        <section className="leader__detail">
          <h2>
            The leader in interactive VR
          </h2>

          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Leader