import './index.css'
import {BiRupee} from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'

const ProductCards = ({productsDetails}) => {
    const {title, thumbnail, price,rating, discountPercentage} = productsDetails 

    const ratingColor = (rating <= 3 ? 'rating-red' : 'rating-gold') 
    return(
        <div className='product-cards-container'>
            <img className='product-image'src={thumbnail} alt='title' />
            <p className='title-tag'>{title}</p>
            <div className='price-container'>
                <p className='price'><BiRupee className='rupee-icon'/>{price}</p>
                <p className={ratingColor}><FaStar/> {rating}</p>
                <p className='discount'>({discountPercentage}% Off)</p>
            </div>
        </div>
    )
}

export default ProductCards