import './index.css'
//  icons
import {FaLinkedin, FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'

// Footer Company Details, Features, Contact From & Social Tabs
const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='company-container'>
                <h1 className='heading'>Company</h1>
                <p className='company-tags'>About Us</p>
                <p className='company-tags'>Partner</p>
                <p className='company-tags'>Privacy Policy</p>
                <p className='company-tags'>Terms & Conditions</p>
            </div>
            <div className='features-container'>
                <h1 className='heading'>Features</h1>
                <p className='features-tag'>AI Chat</p>
                <p className='features-tag'>Live Chat</p>
                <p className='features-tag'>Campaign</p>
                <p className='features-tag'>Nudges</p>
                <p className='features-tag'>Payments</p>
                <p className='features-tag'>Co-browsing</p>
                <p className='features-tag'>Video Chat</p>
                <p className='features-tag'>One-to-One</p>
                <p className='features-tag'>One-to-Many</p>
            </div>
            <div className='newsletter-container'>
                <h1 className='heading'>Newsletter</h1>
                <p className='news-tag-line'>All updates straight to your inbox.</p>
                <form className='form'>
                    <div className='form-item'>
                        <label className='labels' htmlFor='email'>Email</label>
                        <input id='email' type='email' placeholder='Enter Email ...' className='input-email'/>
                    </div>
                    <div className='form-item'>
                        <label className='labels' htmlFor='mobile'>+91</label>
                        <input id='mobile' type='mobile number' placeholder='Enter Mobile Number ...' className='input-number'/>
                    </div>
                    <div>
                        <button type='button' className='submit-btn'>Submit</button>
                    </div>
                </form>
                <div className='social-container'>
                    <FaLinkedin className='icons'/>
                    <FaInstagram className='icons'/>
                    <FaTwitter className='icons'/>
                    <FaYoutube className='icons'/>
                </div>
            </div>
        </div>
    )
}

export default Footer