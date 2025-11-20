import React from 'react'
import Header from '../component/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'

function WhishList() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

   const handleCart = (product)=>{
      const existingProduct = userCart?.find(item=>item.id==product.id)
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      Swal.fire({
        title: 'Completed',
        text: existingProduct?`Quantity of ${product.title} is updated successfully`:`Product addedd to your cart`,
        icon: 'success',
        confirmButtonText: 'OK'
  })
    }

  return (
    <>
    <Header/>
    <div className='conatiner py-5'>
      {/* wishlist with content */}
      {
        userWishlist?.length>0?
        <div className="row m-5">
        {
          userWishlist?.map(product=>(
            <div className="col-md-3 mb-2">
          {/* Card */}
            <Card>
              <Card.Img height={'300px'} variant="top" src={product.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product.title}</Card.Title>
                <div className='d-flex justify-content-evenly my-1'>
                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))
                  } className='btn text-danger fs-4'> <FontAwesomeIcon  icon={faHeartCircleXmark}/></button>
                  <button onClick={()=>handleCart(product)} className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus}/></button>
                </div>
              </Card.Body>
           </Card>
        </div>
          ))
        }
      </div>
        :
        <div style={{height:'100vh'}} className='d-flex align-items-center justify-content-center flex-column'>
          <img src="https://grocarto.com/assets/images/User/gif/cartGif.gif" alt="empty cart" />
          <h3 className='mt-2'>Oops it's Empty!</h3>
          <Link to={'/'} className='btn btn-primary'>Add More</Link>
        </div>
      }
    </div>
    </>
  )
}

export default WhishList