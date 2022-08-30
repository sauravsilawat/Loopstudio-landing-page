import React from 'react'
import data from '../our_creation_data'
import Creation_Gallery from './Creation_Gallery'

function Hero() {

  const heroElement = data.map(items => {
    return <Creation_Gallery name={items.name} deskImg={items.deskImg} mobImg={items.mobImg} />
  })

  return (
    <div>
        <div className="hero--intro">
            <img src={process.env.PUBLIC_URL+"images/desktop/image-interactive.jpg"} alt="interactive" className="hero--img" />
            <div className="text--box">
                <h7>The leader in interactive VR</h7>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.</p>
            </div>
        </div>

        <div className="creation">
          
          <div className="creation--head">
            <h7 className="creation--title">our creations</h7>
            <div className="creation--btn1"><a href='#'>see all</a></div>
          </div>

          <div className="creation--gallery">
            {heroElement}
          </div>
          
          <div className="creation--btn2"><a href='#'>see all</a></div>

        </div>
    </div>
  )
}

export default Hero