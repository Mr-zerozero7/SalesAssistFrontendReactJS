import './index.css'

//  Redirecting pages by Menu Click
import { Link } from 'react-router-dom'

// importing React - icons 
import {FaSearch,FaUser,FaShoppingBag,FaRegBookmark} from 'react-icons/fa'

const NavBar = () => {
    return(
        <div className='navbar-container'>
            <Link to={'/'} className='brand-name-link'><p className='brand-name'>TANN &nbsp; TRIM</p></Link>
            <ul className='menu-container'>
                <Link to={'/search'} className='menu-item-link'><FaSearch  className='menu-icons' icon="fa-solid fa-FaSearch" style={{color: "#eff1f6",}}/></Link>
                <Link to={'/account'} className='menu-item-link'><FaUser  className='menu-icons' icon="fa-solid fa-FaUser" style={{color: "#eff1f6",}}/></Link>
                <Link to={'/wish-list'} className='menu-item-link'><FaRegBookmark   className='menu-icons' icon="fa-solid fa-FaShoppingBag" style={{color: "#eff1f6",}}/></Link>
                <Link to={'/cart'} className='menu-item-link'><FaShoppingBag  className='menu-icons' icon="fa-solid fa-FaRegBookmark" style={{color: "#eff1f6",}}/></Link>
            </ul>
        </div>
    )
}

export default NavBar