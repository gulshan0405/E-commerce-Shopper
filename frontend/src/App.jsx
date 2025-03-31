
import './App.css'
import Navbar from './components/navBar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategories from './pages/ShopCategories'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategories banner={men_banner} category="men" />}/>
      <Route path='/womens' element={<ShopCategories banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategories  banner={kid_banner} category="kid"/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
