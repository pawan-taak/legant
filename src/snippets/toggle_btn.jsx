import React, { useState } from "react"
import "../assest/css/toggle_btn.css"


function ToggleBtn({ show, setShow }) {

    return (
        <>
            <div className={`${show === true ? "active" : ""} sidebar`} >
                <div className="toggle_menu_header">

                    <div className="toggle_header">
                        <p className="h_xl_heading">3legant.</p>
                        <span className="mob_close_toggle"><button onClick={() => { setShow(false) }}>X</button></span>
                    </div>
                    <div className="toggle_search_bar">
                        <img src={require('../assest/img/header_img/search.png')} alt="" className="toggle_search_icon" />
                        <input type="text" placeholder="search" className="f_secondary" />
                    </div>

                    {

                        <ul className="menu_bar h_xls_heading">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Product</li>
                            <li>Contact Us</li>
                        </ul>
                    }
                </div>

                <div className="toggle_footer_icon">
                    <div className="toggle_cart_section">
                        <p className="h_xxl_heading">Cart</p>
                        <div className="toggle_cart_icon">
                            <img src={require('../assest/img/header_img/shop_cart.png')} alt="" className="toggle_search_icon" />
                            <img src={require('../assest/img/header_img/Frame.png')} alt="" className="toggle_search_icon" />
                        </div>
                    </div>

                    <div className="toggle_cart_section">
                        <p className="h_xxl_heading">Wishlist</p>
                        <div className="toggle_cart_icon">
                            <img src={require('../assest/img/header_img/toggle_heart.png')} alt="" className="toggle_search_icon" />
                            <img src={require('../assest/img/header_img/Frame.png')} alt="" className="toggle_search_icon" />
                        </div>
                    </div>
                    <div className="toggle_bar">
                        <button className="toggle_inside_btn h_xxl_heading">Sign In</button>
                    </div>

                    <div className="toggle_social_icon">
                        <img src={require('../assest/img/header_img/instagram.png')} alt="" className="toggle_search_icon" />
                        <img src={require('../assest/img/header_img/facebook.png')} alt="" className="toggle_search_icon" />
                        <img src={require('../assest/img/header_img/youtube.png')} alt="" className="toggle_search_icon" />
                    </div>
                </div>
            </div>
            <div className={`sidebar-overlay ${show === true ? 'active' : ''}`}></div>
        </>
    )
}
export default ToggleBtn;

