import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex align-items-center justify-content-center flex-column'>
       <img src="https://assets.dochipo.com/editor/animations/404-error/7b0e030f-567e-4417-94bb-bc462d5f630c.gif" alt="" />
       <div className='d-flex align-items-center justify-content-center flex-column'>
        <p className='fs-4 fw-bold'>Looks like you're Lost !</p>
        <Link to={'/'} className='btn btn-primary'>Back to Home</Link>
       </div>
    </div>
  )
}

export default Pnf