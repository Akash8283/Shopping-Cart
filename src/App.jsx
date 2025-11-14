import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Home'
import WhishList from './pages/WhishList'
import View from './pages/View'
import Pnf from './pages/Home'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/wishlist' element={<WhishList/>}/>
         <Route path='/products/:id/view' element={<View/>}/>
         <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
