// import { Link } from 'react-router-dom'
import './index.css'

import {v4} from 'uuid';
import { useContext } from 'react';
import ReactContext from '../../context/reactContext';
import {FaSpinner}from 'react-icons/fa'

const subCategoryIcons = [
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116489/Group_475_tzgsz1.png", name: 'All Bags'},
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116484/Group_307_qng0ml.png", name: 'VanityPouch'},
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116478/Group_300_hg9jm2.png", name: 'ToteBag'},
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116478/Group_300_hg9jm2.png", name: 'DuffeleBag'},
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116462/Group_303_twgtcy.png", name: 'LaptopSleeve'},
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116469/Group_302_e2avtv.png", name: 'MessengerBag'},
    {icon: "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116450/Group_304_zbtrxu.png", name: 'SlingsBag'},
]

const Categories = () => {
    const { apiStatus, data, categoryName,setCategoryName} = useContext(ReactContext)

    console.log(data)
    let categoryList= []
    data.forEach((eachCat) => {
        const name = eachCat.category[0].toUpperCase() + eachCat.category.slice(1);
        if(!categoryList.includes(name)){
            categoryList.push(name);
        }
    })

    const loadingView = () => {
        return(
            <FaSpinner icon='fa fa-FaSpinner' style={{color:'lightgray'}} />
        )
    }

    
    return(
        <div className='category-container'>
            {apiStatus === 'IN_PROGRESS' ? 
                loadingView() : 
                (
                <ul className='category-list-container'>
                    {categoryList.map((eachBtn) => (
                        <button className={`tab-button ${categoryName === eachBtn ? 'active-tab' : null}`} 
                        key={v4()} onClick={() => setCategoryName(eachBtn)}>
                            {eachBtn}
                        </button>
                    ))}
                </ul>
            )}
            <ul className='sub-category-container'>
                {subCategoryIcons.map((eachItem) => (
                    <li key={v4()} className='sub-cat-list'><img className='sub-cat-icon' src={eachItem.icon} alt={eachItem.name} /><br/>{eachItem.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Categories