import React from 'react'

function Creation_Gallery(props) {
  return (
    <div>
        <h7 className="creation--name"> {props.name} </h7>
        <img src={process.env.PUBLIC_URL + props.deskImg} className='creation--deskImg' alt="x" />
        <img src={process.env.PUBLIC_URL + props.mobImg} className='creation--mobImg' alt="x" />
        <div className="overlay"></div>
    </div>
  )
}

export default Creation_Gallery