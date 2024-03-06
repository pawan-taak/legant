import '../../src/assest/css/header.css'



function Header() {
    return (
        <>
            <div className="background_header">
                <div className="container">
                    <div className='header_text_bar'>
                        <img src={require('../assest/img/header_img/ticket-percent.png')} alt="" className='ticket_percent'/>
                        <p className='h_sm_heading'>30% off storewide — Limited time! </p>
                        <p className='h_sm_heading'>Shop Now</p>
                    </div>
                </div>
            </div>

            {/* navbar section */}

            <div className='container'>
                <div className='menu_bar_section'>
                    <div><h2>3legant.</h2></div>
                    <ul className='menu_text_bar'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Product</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className='header_icon_section'>
                        <img src={require('../assest/img/header_img/search.png')} alt="" />
                        <img src={require('../assest/img/header_img/Vector.png')} alt="" />
                        <img src={require('../assest/img/header_img/shop_cart.png')} alt="" />
                        <img src={require('../assest/img/header_img/Frame.png')} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}
export default Header