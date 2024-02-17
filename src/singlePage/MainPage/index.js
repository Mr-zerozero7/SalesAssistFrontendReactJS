import './index.css'

// importing useState and useEffect
import { useEffect, useState } from 'react'

// Components
import Categories from '../../components/Categories'
import Products from '../../components/Products'

// importing Global Context
import ReactContext from '../../context/reactContext'

// initializing API Status
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

    // product data fetching from third-party API
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

    // calling fetch
    useEffect(() => {
      fetchData();
     
    }, []);
    
//  eslint-disable-next-line

    //  exporting data and elements to Categories & Prosucts Page
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