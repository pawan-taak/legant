import '../../src/assest/css/header.css'
import { useState } from 'react'
import ToggleBtn from '../snippets/toggle_btn'
import '../assest/css/toggle_btn.css'
import { Link } from 'react-router-dom'




function Header() {
    let [show, setShow] = useState(false)

    const handleExpand = () => {
        const search = document.querySelector(".search-input");
        search.classList.toggle("search-expanded");
    };
    return (
        <>
            <div className="background_header">
                <div className="container">
                    <div className='header_text_bar'>
                        <img src={require('../assest/img/header_img/ticket-percent.png')} alt="" className='ticket_percent' />
                        <p className='h_sm_heading'>30% off storewide — Limited time! </p>
                        <p className='h_sm_heading header_shop_text'>Shop Now</p>
                    </div>
                </div>
            </div>

            {/* navbar section */}

            <div className='container'>

                <div className='menu_bar_section'>
                    <div className='toggle_with_log'>
                        <div className="toggle_bar">
                            <button onClick={() => { setShow(true) }} className="toggle_button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M3 12H21"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 6H21"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 18H21"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Link to={'/home'}><h2>3legant.</h2></Link>
                        
                    </div>
                    <ul className='menu_text_bar h_xls_heading'>
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li>Product</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className='header_icon_section'>

                      

                        <div className="search-bar">
                            <img src={require('../assest/img/header_img/search.png')} alt="" onClick={handleExpand} className="search-wrapper" />
                            <input className="search-input" type="search" placeholder="Search keyword" />
                        </div>

                        <img src={require('../assest/img/header_img/Vector.png')} alt="" className='vector_img' />
                        <img src={require('../assest/img/header_img/shop_cart.png')} alt="" />
                        <img src={require('../assest/img/header_img/Frame.png')} alt="" />
                    </div>
                </div>
            </div>

            {

                <ToggleBtn show={show} setShow={setShow} />
            }


        </>
    )
}
export default Header