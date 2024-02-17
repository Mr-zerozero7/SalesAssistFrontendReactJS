import './index.css'
import React from 'react'
import Categories from '../Categories'

const Home = () =>{
    return(
        <div className='home-container'>
            <Categories/>
            <p className='category-tag'>Home Page</p>
        </div>
    )
}

export default Home