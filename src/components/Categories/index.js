// import { Link } from 'react-router-dom'
import './index.css'

// importing unique id generator
import {v4} from 'uuid';
// importing useContext & ReactContext 
import { useContext } from 'react';
import ReactContext from '../../context/reactContext';
import {FaSpinner}from 'react-icons/fa'

// created sub-category icons
const subCategoryIcons = [
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199931/All-Bags_lty2do.png", name: 'All Bags'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199932/Vanity-Pouch_d7wzot.png", name: 'VanityPouch'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199932/Messenger-Bags_seqdve.png", name: 'ToteBag'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199932/Tote-Bag_hmpnqa.png", name: 'DuffeleBag'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199931/Laptop-Sleeve_xhbesu.png", name: 'LaptopSleeve'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199932/Slings-Bag_bxyc0o.png", name: 'MessengerBag'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199931/Duffele-Bag_f5r95m.png", name: 'SlingsBag'},
    {icon: "https://res.cloudinary.com/dxpbbqji6/image/upload/v1708199931/Hand-Bag_g2kwff.png", name: 'HandBag'},
]

const Categories = () => {
    const { apiStatus, data, categoryName,setCategoryName} = useContext(ReactContext)

    // console.log(data)
    // creating category names list by using forEach from the data
    let categoryList= []
    data.forEach((eachCat) => {
        const name = eachCat.category[0].toUpperCase() + eachCat.category.slice(1);
        if(!categoryList.includes(name)){
            categoryList.push(name);
        }
    })

    // Loading Spinner
    const loadingView = () => {
        return(
            <FaSpinner icon='fa fa-FaSpinner' style={{color:'lightgray'}} />
        )
    }

    // creating Category Tabs & Sub-Category Icon Buttons
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