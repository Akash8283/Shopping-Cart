import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, emptyCart, incrementCartItem, removeCartItem } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Cart() {
    const userCart = useSelector(state=>state.cartReducer)
    const [sum,setSum] = useState(0)
    const navigate = useNavigate()
    // console.log(userCart);
    
    useEffect(()=>{
        setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
    },[userCart])

    const dispatch = useDispatch()
     
    const handleDecrement = (product)=>{
        if (product.quantity>1) {
            // decrement
            dispatch(decrementCartItem(product))
        }
        else{
            // remove
            dispatch(removeCartItem(product.id))
        }
    }
     
    const checkOut = ()=>{
        Swal.fire({
            title:"Orderd Confirmed",
            text:"Thank you for Purchasing with us",
            icon:"success",
            confirmButtonText:"OK"
        })
        setTimeout(()=>{
            dispatch(emptyCart())
            navigate('/')
        },2000)
    }

  return (
    <>
    <Header/>
    <div className='container py-5'>

        {
            userCart.length>0?
            <div className="my-5">
            <h1 className='text-danger fw-bold'>Cart Summary</h1>
                <div className="row mt-3">
                
                        <div className="col-md-8 border rounded p-5">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SI NO</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>...</th>
                            </tr>
                        </thead>
                    {
                    userCart?.map((product,index)=>(    
                        <tbody key={index}>
                            <tr>
                            <td>{index+1}</td>
                            <td>{product.title}</td>
                            <td><img width={'50px'} height={'50px'} src={product.thumbnail} alt="product" /></td>
                            <td><div className='d-flex'>
                                <button onClick={()=>dispatch(handleDecrement(product))} className='btn fs-3 fw-bold'>-</button>
                                <input style={{width:'50px'}} value={product.quantity} type="text" className='form-control' readOnly />
                                <button onClick={()=>dispatch(incrementCartItem(product))} className='btn fs-4 fw-bold'>+</button>
                                </div>
                                </td>
                            <td>{product.totalPrice}</td>
                            <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn text-danger'><FontAwesomeIcon icon={faTrash}/></button></td>
                            </tr>
                        </tbody>
                                        ))
                }    
                    </table>
                    <div className="float-end my-3 ">
                        <button onClick={()=>dispatch(emptyCart())} className='btn btn-outline-danger me-2'>EMPTY CART</button>
                        <Link to={'/'} className='btn btn-outline-primary'>SHOP MORE</Link>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="border rounded p-5">
                        <h3 className='fw-bold'>Total amount : <span className='text-danger'>{sum}</span> </h3>
                        <hr />
                        <div className='d-grid mt-2'>
                            <button onClick={checkOut} className='btn btn-success'>CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <div style={{height:"80vh"}} className='d-flex align-items-center justify-content-center flex-column'>
            <img src="https://www.gospeedy.co.in/images/empty.gif" alt="cart empty" />
            <p className='mt-2 fw-bold'>Oops Cart Empty!</p>
            <Link to={'/'} className='btn btn-primary'>Add More</Link>
        </div>
        }
    </div>

            
    </>
  )
}

export default Cart