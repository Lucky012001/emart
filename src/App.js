// import Nevbar from './component/Nevbar';
import './App.css';
import Products from './component/Products';
import Home from './component/Home';
import Product from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Nevbar from  './component/Nevbar';
// import Login from './component/Login';

function App() {
  return (
    <>
      
     <Nevbar/>
      <Routes>     
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
