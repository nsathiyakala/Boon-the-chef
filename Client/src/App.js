import './App.css';
import Home from './pages/Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import ProductDetails from './pages/productDetails';
import Products from './pages/Product';
import About from './pages/About';
import Contact from './pages/contact';
import WholeProductDetails from './pages/wholeProductdetails';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Cart from './pages/cart';
import Navbar from './components/navbar';
import Footer from './components/footerpage';
import ComboProducts from './pages/comboProducts';
import ComboCart from "./pages/comboCart"
import ScrollToTop from './components/Scrooltotop';
import ShippingInfo from './pages/ShipppingInfo';
import Checkout from './pages/checkout';

// import Search from './components/search';
 

function App() {
  const[cartItems,setCartItems]=useState([]);

  return (
    <BrowserRouter>
      <div>
        <ToastContainer theme='light' position='top-center'/>
        <Navbar cartItems={cartItems} />
        <ScrollToTop/>
        <Routes>
        
          

          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home cartItems={cartItems}/>}/>
          <Route path='/search' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path='/products' element= {<Products/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/products/:id' element={<WholeProductDetails/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path='/comboproducts' element={<ComboProducts/>} />
          <Route path='/combocart' element={<ComboCart/>}/>
          <Route path="/shippinginfo" element={<ShippingInfo cartItems={cartItems}/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          
          
          


        
  


   </Routes>
   <Footer/>
   </div>
   </BrowserRouter>
      );
}

export default App;
