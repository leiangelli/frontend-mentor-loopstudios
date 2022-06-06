import React from 'react'

function Creations () {
  return(
    <div className="creations">
      <section className="l-inner">
        <h2>
          our creations
        </h2>

        <a href="#" role="button" className="creations__button is-pc">
          see all
        </a>

        <div className="creations-list">
          <div className="creations-list__item deep-earth">
            <p>
              deep <br />
              earth
            </p>
          </div>

          <div className="creations-list__item night-arcade">
            <p>
              night <br />
              arcade
            </p>
          </div>

          <div className="creations-list__item soccer-team">
            <p>
              soccer <br />
              team vr
            </p>
          </div>

          <div className="creations-list__item grid">
            <p>
              the <br />
              grid
            </p>
          </div>

          <div className="creations-list__item from-above">
            <p>
              from up <br />
              above vr
            </p>
          </div>

          <div className="creations-list__item pocket-borealis">
            <p>
              pocket <br />
              borealis
            </p>
          </div>

          <div className="creations-list__item curiosity">
            <p>
              the <br />
              curiosity
            </p>
          </div>

          <div className="creations-list__item fisheye">
            <p>
              make it <br />
              fisheye
            </p>
          </div>
        </div>

        <a href="#" role="button" className="creations__button is-mb">
          see all
        </a>
      </section>
    </div>
  )
}

export default Creations