import '../assest/css/shipping_section.css'

function Shipping() {
    return (
        <>
            <div className='container'>

                <div className='shipping_section'>

                    <div className='shipping_text_bar'>
                        <img src={require('../assest/img/hero_img/delivery.png')} alt="#" />
                        <p className='hero_xl_text'>Free Shipping</p>
                        <p className='home_secondary'>Order above $200</p>
                    </div>

                    <div className='shipping_text_bar'>
                        <img src={require('../assest/img/hero_img/money.png')} alt="#" />
                        <p className='hero_xl_text'>Money-back</p>
                        <p className='home_secondary'>30 days guarantee</p>
                    </div>

                    <div className='shipping_text_bar'>
                        <img src={require('../assest/img/hero_img/lock.png')} alt="#" />
                        <p className='hero_xl_text'>Secure Payments</p>
                        <p className='home_secondary'>Secured by Stripe</p>
                    </div>

                    <div className='shipping_text_bar'>
                        <img src={require('../assest/img/hero_img/call.png')} alt="#" />
                        <p className='hero_xl_text'>24/7 Support</p>
                        <p className='home_secondary'>Phone and Email support</p>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Shipping;