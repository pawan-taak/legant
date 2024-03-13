import { useState } from 'react';
import '../assest/css/cart_section.css'
import CommonCard from '../snippets/common_cart';


function YourCart() {
    const [counter, setcounter] = useState(0)

    const Cart = [
        {
            image: 'cart_black_table.png',
            title: 'Tray Table',
            color: 'Color: Black',
        },

        {
            image: 'cart_red_table.png',
            title: 'Tray Table',
            color: 'Color: Red',
        },

        {
            image: 'cart_lamp.png',
            title: 'Table lamp',
            color: 'Color: Gold',

        },
    ]

    return (

        <>
            <div className='container'>
                <div className='cart_top_heading'>
                    <h2 className='hero_secondary'>Cart</h2>

                    <div className='series_heading'>
                        <div className='cart_series_bar'>
                            <p className='number_text'>1</p>
                            <p className='home_weight_second'>Shopping cart</p>
                        </div>

                        <div className='cart_series_bar'>
                            <p className='number_text'>2</p>
                            <p className='home_weight_second'>Checkout details</p>
                        </div>

                        <div className='cart_series_bar'>
                            <p className='number_text'>3</p>
                            <p className='home_weight_second'>Order complete</p>
                        </div>
                    </div>

                </div>
                <div className='shopping_cart'>
                    <div className='cart_about_section'>
                        <div className='product_details home_weight_third'>
                            <p className='home_weight_second'>Product</p>
                            <div className='product_quantity home_weight_second'>
                                <p>Quantity</p>
                                <p>Price</p>
                                <p>Subtotal</p>
                            </div>
                        </div>
                        <div className='cart_section'>
                            {
                                Cart.map((item) => {
                                    return (
                                        <CommonCard data={item} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* cart summary section */}

                    <div className='mob_coupon_section'>
                            <p className='hero_xl_text'>Have a coupon?</p>
                            <p className='home_weight_fourth'>Add your code for an instant cart discount</p>
                            <div className='add_coupon_section'>
                                <img src={require('../assest/img/header_img/ticket-percent.png')} alt="" className='coupon_discount_img' />
                                <input type="text" placeholder='Coupon Code' className='add_coupon_text home_weight_fourth' />
                                <button className='coupon_btn home_weight_third'>Apply</button>
                            </div>
                        </div>
                    
                        <div className='cart_summary_bar'>
                        <div className='cart_summary_section'>
                            <p className='hero_xl_text'>Cart summary</p>
                            <div className='cart_summary_details'>
                                <div className='cart_checked'>
                                    <input type="checkbox" />
                                    <label htmlFor="" className='home_weight_fourth'>Free shipping</label>
                                </div>
                                <p className='home_weight_fourth'>$0.00</p>
                            </div>

                            <div className='cart_summary_details'>
                                <div className='cart_checked'>
                                    <input type="checkbox" />
                                    <label htmlFor="" className='home_weight_fourth'>Express shipping</label>
                                </div>
                                <p className='home_weight_fourth'>+$15.00</p>
                            </div>

                            <div className='cart_summary_details'>
                                <div className='cart_checked'>
                                    <input type="checkbox" />
                                    <label htmlFor="" className='home_weight_fourth'>Pick Up</label>
                                </div>
                                <p className='home_weight_fourth'>%21.00</p>
                            </div>

                            <div className='cart_summary_sub'>
                                <p className='home_weight_fourth'>Subtotal</p>
                                <p className='home_weight_second'>$1234.00</p>
                            </div>

                            <div className='cart_summary_total'>
                                <p className='hero_xxl_text'>Total</p>
                                <p className='hero_xxl_text'>$1345.00</p>
                            </div>
                            <button className='cart_button hero_weight_second'>Checkout</button>
                        </div>
                        </div>

                        {/* cart coupon section */}
                     
                        <div className='coupon_section'>
                            <p className='hero_xl_text'>Have a coupon?</p>
                            <p className='home_weight_fourth'>Add your code for an instant cart discount</p>
                            <div className='add_coupon_section'>
                                <img src={require('../assest/img/header_img/ticket-percent.png')} alt="" className='coupon_discount_img' />
                                <input type="text" placeholder='Coupon Code' className='add_coupon_text home_weight_fourth' />
                                <button className='coupon_btn home_weight_third'>Apply</button>
                            </div>
                        </div>

                    


                </div>

            </div>
        </>
    )
}

export default YourCart;