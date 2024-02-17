// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Footer from './components/Footer'

import MainPage from './singlePage/MainPage'

function App(){
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/' element={<MainPage/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
  }

export default App;
