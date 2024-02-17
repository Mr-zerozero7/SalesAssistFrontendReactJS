import './index.css'

import { useEffect, useState } from 'react'

import Categories from '../../components/Categories'
import Products from '../../components/Products'
// import NavBar from '../../components/NavBar'
// import Footer from '../../components/Footer'

import ReactContext from '../../context/reactContext'

const apiStatusObject = {
    initial: 'INITIAL',
    progress: 'IN_PROGRESS',
    failure: 'FAILURE',
    success: 'SUCCESS',
}

const MainPage = () => {
    const [categoryName, setCategoryName] = useState("")
    const [data, setData] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusObject.initial)
    const [fetchError, setFetchError] = useState('')

    const fetchData = async() => {
        try {
            setApiStatus(apiStatusObject.progress)
            const url = 'https://dummyjson.com/products'
            const response = await fetch(url)
            const data = await response.json()
            if(response.ok){
                console.log(data.products)
                setData(data.products)
                setApiStatus(apiStatusObject.success)
            }else{
                console.log('response data format error')
            }
        } catch (error) {
            console.log('error message:', error.message)
            setApiStatus(apiStatusObject.failure)
            setFetchError(error.message)
        }
    }

    useEffect(() => {
      fetchData();
     
    }, []);
    
//  eslint-disable-next-line

    return(
        <ReactContext.Provider value={{apiStatus, data, categoryName, setCategoryName, fetchData, fetchError}}>
            <div className='home-container'>
                <Categories/>
                <Products/>
            </div>
        </ReactContext.Provider>
    )
}

export default MainPage