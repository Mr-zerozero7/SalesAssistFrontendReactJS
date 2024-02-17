// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Categories from './components/Categories'
import Products from './components/Products'
import ProductCards from './components/ProductCards'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route eaxt path='/' element={<Home/>}/>
        <Route eaxt path='/categories' element={<Categories/>}/>
        <Route eaxt path='/products' element={<Products/>}/>
        <Route eaxt path='/product-cards/:id' element={<ProductCards/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
