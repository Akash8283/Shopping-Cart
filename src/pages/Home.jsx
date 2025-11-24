import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getallproducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'


function Home() {
   const dispatch = useDispatch()
   const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  //  console.log(allProducts);

  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts.length / productsPerPage)
  
  const pageItemLastIndex = currentPage * productsPerPage
  const pageItemStartIndex = pageItemLastIndex - productsPerPage
  const visibleProducrsArray = allProducts?.slice(pageItemStartIndex,pageItemLastIndex)

   useEffect(()=>{
    dispatch(getallproducts())
   },[])

  const navigateNext =()=>{
    if (currentPage!=totalPages) {
      setCurrentPage(currentPage+1)
    }
  }

  const navigatePrevious =()=>{
    if (currentPage!=1) {
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome={true} />
     <div className='container py-5'>
       {
        loading?
        <div className='text-center my-5 fw-bolder fs-5'><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" /></div>
        :
        <div className="row my-5">
        {/* dupliacte */}
        {
          allProducts?.length>0?
          visibleProducrsArray?.map(product=>(
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
        <div className="my-3 text-center mt-5">
          <button onClick={navigatePrevious} className='btn btn-outline-primary me-1'> <FontAwesomeIcon icon={faBackward}/></button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={(navigateNext)} className='btn btn-outline-primary ms-1'> <FontAwesomeIcon icon={faForward}/></button>
        </div>
       </div>
       }
       </div>
      </>
  )
}

export default Home