import React from 'react'

function Header() {

  // const enter = (e) => {
  //   e.currentTarget.classList.add('nav-elements-hover');
  // }
  // const leave = (e) => {
  //   e.currentTarget.classList.remove('nav-elements-hover');
  // }

  return (
    <div className='header--background'>
        <nav className='header'>
            <div className="navbar">
              <img className="nav--logo" src={process.env.PUBLIC_URL+"images/logo.svg"} alt="Header-logo" />
              <h4 className="nav--elements">
                  <span><a className='hoverEffect' href='#'>About</a></span> 
                  <span><a className='hoverEffect' href='#'>Careers</a></span> 
                  <span><a className='hoverEffect' href='#'>Events</a></span>
                  <span><a className='hoverEffect' href='#'>Products</a></span> 
                  <span><a className='hoverEffect' href='#'>Support</a></span> 
              </h4>
              <div className="hamburger">
                <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg>
              </div>
            </div>
            <div className="header--box">
                <div className="box-title">Immersive experiences that deliver</div>
            </div>
        </nav>
    </div>
  )
}

export default Header