import './index.css'
import { useContext } from 'react'
import ReactContext from '../../context/reactContext'
import ProductCards from '../ProductCards'
import {v4} from 'uuid'
import { FaSpinner } from 'react-icons/fa'
import {BsBoxArrowUp} from 'react-icons/bs'


const apiStatusObject = {
    initial: 'INITIAL',
    progress: 'IN_PROGRESS',
    failure: 'FAILURE',
    success: 'SUCCESS'
}

const Products = () => {
    const {apiStatus, data, categoryName, fetchData} = useContext(ReactContext)

    console.log(data)
    // eslint-disable-next-line
    const filtered = data.filter((each) => 
        each.category.includes(categoryName.toLowerCase())
    ) 

    const failureView = () => {
        return(
            <div className='failure-view-container'>
                <h1>Somthing wet Wrong !!!..</h1>
                <button className='try-again-btn' type='button' onClick={() => fetchData()}>
                    Try Again
                </button>
            </div>
        )
    }

    const loadingView = () =>{
        return(
            <div className='loading-container'>
                <FaSpinner icon='fa fa-FaSpinner' style={{color:'lightgray'}} />
            </div>
        )
    }

    const getView = () =>{
        switch (apiStatus){
            case apiStatusObject.progress:
                return loadingView();
            case apiStatusObject.failure:
                return failureView();
            case apiStatusObject.success:
                
                return (
                    <>
                    {filtered.map((eachItem) => (
                            <ProductCards key={v4()} productsDetails={eachItem} />
                        ))}
                    </>
                )
            default:
                return null;
        }
    }

    return(
        <div className='products-main-container'>
            <div className='category-taglines'>
                <p className='category-tag'>{categoryName}</p>
                <p className='products-count'><span className='count'>{filtered.length}</span> Products <BsBoxArrowUp className='exit-icon'/></p>
            </div>
            <ul className='products-container'>
                {getView()}
            </ul>
        </div>
    )
}

export default Products