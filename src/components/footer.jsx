import '../assest/css/footer.css'




function Footer() {
    return (
        <>
            <div className='footer_image_section'>
                
                <div className='footer_signup_section'>
                    <div>
                        <p className='h_primary'>Join Our Newsletter</p>
                        <p className='h_xxl_heading'>Sign up for deals, new products and promotions</p>
                    </div>

                    <div className='signup_bar'>
                        <img src={require('../assest/img/footer_img/email.png')} alt="" />
                        <input type="text" placeholder='email address' className='search_section h_xl_heading' />
                        <button className='footer_signup_text h_xl_heading'>signup</button>
                    </div>
                </div>
                <img src={require('../assest/img/footer_img/footer_Placeholder.png')} alt="" className='footer_back_img'/>
            </div>

            {/* footer bottom section */}
            <div className='footer_back_section'>
                <div className='container'>
                    <div className='footer_bottom_text_bar'>
                    <div className='footer_menu_bar'>
                        <div className='footer_icon'>
                            <h2 className='h_secondary'>3legant.</h2>
                            <p className='f_secondary'>Gift & Decoration Store</p>
                        </div>
                        <ul className='footer_menu_text f_secondary'>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Product</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className='footer_bottom_section'>
                        <div className='footer_term_section'>
                            <p className='page_middle'>Copyright © 2023 3legant. All rights reserved</p>
                            <p className='f_sm_heading'>Privacy Policy</p>
                            <p className='f_sm_heading'>Terms of Use</p>
                        </div>
                        <div className='footer_icon_section'>
                            <img src={require('../assest/img/footer_img/instagram.png')} alt="#" />
                            <img src={require('../assest/img/footer_img/facebook.png')} alt="#" />
                            <img src={require('../assest/img/footer_img/youtube.png')} alt="#" />
                        </div>
                    </div>
                    </div>
                   
                </div>


            </div>
        </>
    )
}
export default Footer;