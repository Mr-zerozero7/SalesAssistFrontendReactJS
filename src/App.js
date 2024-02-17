// import CSS styles
import './App.css';

// NPM Packages and Components
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Footer from './components/Footer'

// Single formed
import MainPage from './singlePage/MainPage'

// Switching Routes Page
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
