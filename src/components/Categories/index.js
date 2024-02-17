import { Link } from 'react-router-dom'
import './index.css'
import React from 'react'
import AllBags from './subCategoryIcons/All-Bags.png'
import BuckelBag from './subCategoryIcons/Buckel-Bag.png'
import DuffeleBag from './subCategoryIcons/Duffele-Bag.png'
import HandBag from './subCategoryIcons/Hand-Bag.png'
import LaptopSleeve from './subCategoryIcons/Laptop-Sleeve.png'
import MessengerBag from './subCategoryIcons/Messenger-Bags.png'
import SlingsBag from './subCategoryIcons/Slings-Bag.png'
import ToteBag from './subCategoryIcons/Tote-Bag.png'
import VanityPouch from './subCategoryIcons/Vanity-Pouch.png'

const Categories = () => {
    return(
        <div className='category-container'>
            <ul className='category-list-container'>
                <Link to={'/bags'} className='category-link'><li className='category-list-item'>Bags</li></Link>
                <Link to={'/travel'} className='category-link'><li className='category-list-item'>Travel</li></Link>
                <Link to={'/accessories'} className='category-link'><li className='category-list-item'>Accessories</li></Link>
                <Link to={'/gifting'} className='category-link'><li className='category-list-item'>Gifting</li></Link>
                <Link to={'/jewelery'} className='category-link'><li className='category-list-item'>Jewelery</li></Link>
            </ul>
            <div className='sub-category-container'>
                <Link to={'/bags/sub-category/all-bags'} className='sub-cat-link'><img className='sub-cat-icon' src={AllBags} alt='AllBags' /><br/>All Bags</Link>
                <Link to={'/bags/sub-category/vanity-pouch'} className='sub-cat-link'><img className='sub-cat-icon' src={VanityPouch} alt='AllBags' /><br/>VanityPouch</Link>
                <Link to={'/bags/sub-category/tote-bag'} className='sub-cat-link'><img className='sub-cat-icon' src={ToteBag} alt='AllBags' /><br/>ToteBag</Link>
                <Link to={'/bags/sub-category/duffele-bag'} className='sub-cat-link'><img className='sub-cat-icon' src={DuffeleBag} alt='AllBags' /><br/>DuffeleBag</Link>
                <Link to={'/bags/sub-category/laptop-sleeve'} className='sub-cat-link'><img className='sub-cat-icon' src={LaptopSleeve} alt='AllBags' /><br/>LaptopSleeve</Link>
                <Link to={'/bags/sub-category/messenger-bag'} className='sub-cat-link'><img className='sub-cat-icon' src={MessengerBag} alt='AllBags' /><br/>MessengerBag</Link>
                <Link to={'/bags/sub-category/slings-bag'} className='sub-cat-link'><img className='sub-cat-icon' src={SlingsBag} alt='AllBags' /><br/>SlingsBag</Link>
                <Link to={'/bags/sub-category/hand-bag'} className='sub-cat-link'><img className='sub-cat-icon' src={HandBag} alt='AllBags' /><br/>HandBag</Link>
                <Link to={'/bags/sub-category/buckel-bag'} className='sub-cat-link'><img className='sub-cat-icon' src={BuckelBag} alt='AllBags' /><br/>BuckelBag</Link>
            </div>
        </div>
    )
}

export default Categories