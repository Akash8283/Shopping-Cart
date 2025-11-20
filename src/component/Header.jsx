import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Container, Navbar,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  // console.log(userWishlist);
  const userCart = useSelector(state=>state.cartReducer)
  
  return (
      <Navbar expand="lg" className="bg-primary position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand> <Link to={'/'} className='text-white text-decoration-none fw-bolder'> <FontAwesomeIcon icon={faTruckFast}/> Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light rounded'/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto d-md-flex align-items-md-center">
            <Link to={'/wishlist'} className='text-white text-decoration-none fw-bolder d-flex align-items-center'> <FontAwesomeIcon className='text-danger me-1' icon={faHeart}/>  WISHLIST <Badge className='ms-1' pill bg='dark'>{userWishlist?.length}</Badge></Link>
            <Link to={'/cart'} className='text-white text-decoration-none fw-bolder ms-5 d-flex align-items-center'> <FontAwesomeIcon className='text-success me-1' icon={faCartShopping}/> CART <Badge className='ms-1' pill bg='dark'>{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header