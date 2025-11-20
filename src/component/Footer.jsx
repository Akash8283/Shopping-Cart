import { faFacebook, faGithub, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div
      style={{ height: "350px" }}
      className="bg-primary d-flex justify-content-center align-items-center flex-column text-light "
      >
      <div className="d-flex justify-content-evenly w-100 mt-5">

        {/* Left Section */}
        <div style={{ width: "400px" }} className="intro">
          <h3>
            <FontAwesomeIcon icon={faTruckFast} /> Daily Cart
          </h3>
          <p>
            Designed and built with all the love in the world by the Luminar team with
            the help of our contributors.
          </p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        {/* Links Section */}
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link to="/" className="text-decoration-none text-light">Home</Link>
          <Link to="/wishlist" className="text-decoration-none text-light">Wishlist</Link>
          <Link to="/cart" className="text-decoration-none text-light">Cart</Link>
        </div>
        <div className="links d-flex flex-column">
  <h3>Guides</h3>

  <a href="https://react-bootstrap.github.io/" className="text-decoration-none text-light">
    React
  </a>

  <a href="https://react-bootstrap.github.io/" className="text-decoration-none text-light">
    React Bootstrap
  </a>

  <a href="https://react-bootstrap.github.io/" className="text-decoration-none text-light">
    React Redux
  </a>

  <a href="https://react-bootstrap.github.io/" className="text-decoration-none text-light">
    React Router Dom
  </a>
</div>

<div className="d-flex flex-column">
  <h3>Contact us</h3>

  <div className="d-flex">
    <input
      type="text"
      placeholder="Email Here"
      className="form-control"
    />

    <button className="btn text-light">
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  </div>
  <div className='mt-3 d-flex justify-content-between py-2'>
    <FontAwesomeIcon icon={faFacebook}/>
    <FontAwesomeIcon icon={faInstagram} className='m'/>
    <FontAwesomeIcon icon={faWhatsapp} className='ms'/>
    <FontAwesomeIcon icon={faGithub} className='ms'/>
    <FontAwesomeIcon icon={faYoutube} className='ms-'/>
  </div>
</div>
      </div>
      <p className='mt-5 fw-bold'>Copyright &copy; July 2025 Batch,Daily Cart.Built with React Redux</p>
</div>


  )
}

export default Footer