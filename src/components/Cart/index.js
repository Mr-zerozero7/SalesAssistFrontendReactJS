import './index.css'
// import React, { useEffect } from 'react'
import Categories from '../Categories'
import {RxExit} from 'react-icons/rx'
import Products from '../Products'
// import { useState } from 'react'

const Cart = () =>{
    // const [productsData, setProductsData] = useState({})

    // const loadData = async() => {
    //     try {
    //         const url = 'https://dummyjson.com/products'
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         if(response.ok){
    //             console.log(data)
    //         }else{
    //             console.log('fetching error')
    //             setProductsData(data)
    //         }
            
    //     } catch (error) {
    //         console.log('error:', error.message)
    //     }
        
    // }

    // useEffect(() => {
    //     loadData();
    
    // //   return () => {
    // //     second
    // //  
    // }, [productsData])
    
    return(
        <div className='home-container'>
            <Categories/>
            <div className='category-tag-count-container'>
                <p className='category-tag'>Bags * ToteBags</p>
                <p className='product-count'>Products <RxExit className='exit-icon'/></p>
            </div>
            <div className='products-container'>
                <Products />
            </div>
        </div>
    )
}

export default Cart