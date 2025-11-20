import React, { useEffect } from 'react'
import Header from '../component/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getallproducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
   const dispatch = useDispatch()
   const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  //  console.log(allProducts);

   useEffect(()=>{
    dispatch(getallproducts())
   },[])

  return (
    <>
      <Header/>
     <div className='container py-5'>
       {
        loading?
        <div className='text-center my-5 fw-bolder fs-5'><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" /></div>
        :
        <div className="row my-5">
        {/* dupliacte */}
        {
          allProducts?.length>0?
          allProducts?.map(product=>(
            <div key={product?.id} className="col-md-3 mb-2">
          {/* Card */}
            <Card>
              <Card.Img height={'300px'} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center '>
                <Card.Title>{product?.title}</Card.Title>
                <Link to={`/products/${product?.id}/view`} className='btn btn-primary rounded'>View more..</Link>
              </Card.Body>
           </Card>
         </div>
          ))
          :
           <p className='text-center fw-bold fs-5'>Product not Found</p>
        }
       </div>
       }
       </div>
      </>
  )
}

export default Home