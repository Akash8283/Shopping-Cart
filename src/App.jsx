import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WhishList from './pages/WhishList'
import View from './pages/View'
import Footer from './component/Footer'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/wishlist' element={<WhishList/>}/>
         <Route path='/products/:id/view' element={<View/>}/>
         <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
