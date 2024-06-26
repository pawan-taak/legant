import React, { useState } from "react";
import '../assest/css/chekout.css'
function CheckOut() {
    const [count, setcount] = useState(0)
    const order = [
        {
            image: 'black_table.png',
            title: 'Tray Table',
            color: 'Black',
            price: '$38.00'
        },
        {
            image: 'red_table.png',
            title: 'Tray Table',
            color: 'Red',
            price: '$38.00'
        },
        {
            image: 'table_lamp.png',
            title: 'Table lamp',
            color: 'gold',
            price: '$39.00'
        },
    ]
    return (
        <>
            <div className='container'>
                <div className='section'>
                    <div className="about-order">
                        <h2 className="hero_secondary check_out_heading">Check Out</h2>
                        <div className="order_through">
                            <div className="order_details">
                                <div className="checked">1</div>
                                <div className="shipping">Shipping cart</div>
                            </div>
                            <div className="order_details">
                                <div className="checkeout_deatils">2</div>
                                <div className="check_out_info">Checkout details</div>
                            </div>

                            <div className="order_details">
                                <div className="order_info">3</div>
                                <div className="order_complete">Order complete</div>
                            </div>
                        </div>
                    </div>
                    <div className="check_out_section">
                        <div className="check_out_right">
                            <div className="about_shipping1">
                                <h2 className="hero_xl_text ">Contact Information</h2>
                                <div className="first_last_name">
                                    <div>
                                        <div className="contact_info_heading">
                                            <lable className='page_primary about_input_info'>First Name</lable><br />
                                        </div>
                                        <input className="home_weight_fourth common_checkout" type="text" placeholder="First Name" />
                                    </div>
                                    <div>
                                        <div className="contact_info_heading">
                                            <lable className="page_primary about_input_info">Last Name</lable><br />
                                        </div>
                                        <input className="home_weight_fourth common_checkout" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div>
                                    <div className="contact_info_heading">
                                        <lable className='page_primary about_input_info'>Phone Number</lable><br />
                                    </div>
                                    <input className="home_weight_fourth common_checkout_long" type="text" placeholder="Phone Number" />

                                </div>
                                <div>
                                    <div className="contact_info_heading">
                                        <lable className='page_primary about_input_info'>Email</lable><br />
                                    </div>
                                    <input className="home_weight_fourth common_checkout_long" type="text" placeholder="Email" />

                                </div>
                            </div>

                            <div className="about_shipping2">
                                <h2 className="hero_xl_text contact_info_heading">Shipping Address</h2>

                                <div>
                                    <div className="contact_info_heading">
                                        <lable className='page_primary about_input_info'>STREET ADDRESS</lable><br />
                                    </div>
                                    <input className="home_weight_fourth common_checkout_long" type="text" placeholder="Street Address" />

                                </div>
                                <div>
                                    <div className="contact_info_heading">
                                        <lable className='page_primary about_input_info'>COUNTRY</lable><br />
                                    </div>
                                    <select className='home_weight_fourth common_checkout_long'>
                                        <option value="country">Country</option>
                                        <option value="newest">INDIA</option>
                                        <option value="canada">CANADA</option>
                                        <option value="england">ENGLAND</option>
                                        <option value="srilanka">SRI LANKA</option>

                                    </select>

                                </div>
                                <div>
                                    <div className="contact_info_heading">

                                        <lable className='page_primary about_input_info'>TOWN/CITY</lable><br />
                                    </div>
                                    <input className="home_weight_fourth common_checkout_long" type="text" placeholder="Town/City" />

                                </div>
                                <div className="first_last_name">
                                    <div>
                                        <lable className='page_primary about_input_info'>STATE</lable><br />
                                        <input className="home_weight_fourth common_checkout" type="text" placeholder="State" />
                                    </div>
                                    <div>
                                        <lable className="page_primary about_input_info">ZIP CODE</lable><br />
                                        <input className="home_weight_fourth common_checkout" type="text" placeholder="Zip Code" />
                                    </div>
                                </div>
                            </div>


                            <div className="about_shipping3">
                                <h2 className="hero_xl_text contact_info_heading ">Payment method</h2>
                                <div className="payment_type">

                                    <div className="payment_methode common_checkout_long">
                                        <input className="home_weight_fourth" type="radio" placeholder="Pay by Card Credit" />
                                        <label>Pay by Card Credit</label>
                                    </div>
                                    <div className="payment_methode common_checkout_long">
                                        <input className="home_weight_fourth" type="radio" placeholder="Paypal" />
                                        <label>Paypal</label>
                                    </div>
                                </div>


                                <div>
                                    <lable className='page_primary about_input_info'>CARD NUMBER</lable><br />
                                    <input className="home_weight_fourth" type="text" placeholder="1234 1234 1234" />

                                </div>
                                {/* <hr className="pay_methode" /> */}
                                <div className="first_last_name">
                                    <div>
                                        <div>
                                            <lable className='page_primary about_input_info'>EXPIRATION DATE</lable><br />
                                        </div>
                                        <input className="home_weight_fourth common_checkout" type="text" placeholder="MM/YY" />
                                    </div>
                                    <div>
                                        <lable className="page_primary about_input_info">CVC</lable><br />
                                        <input className="home_weight_fourth common_checkout" type="text" placeholder="CVC code" />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="check_out_left">
                            <div className="about_shipping_left">
                                <h2 className="order_summery">Order summary</h2>
                                <div className="checkout_bar">

                                    <div className="img_lemp_section">

                                        {
                                            order.map((item, index) => (
                                                <div key={index} className="lamp_section_left about_checkout_left">
                                                    {/* <img className="tables" src={require('../assest/img/about_table_img/table_lamp.png')} /> */}
                                                    <img className="tables" src={require(`../assest/img/about_table_img/${item?.image}`)} />
                                                    <div className="">
                                                        <h2 className="home_primary">{item.title}</h2>
                                                        <p className="page_middle">color:{item.color}</p>

                                                        <div className="cart_product">
                                                            <button className="sub_add_btn" onClick={() => count > 0 && setcount(count - 1)}>-</button>
                                                            <p className="page_secondary">{count}</p>
                                                            <button className="sub_add_btn" onClick={() => setcount(count + 1)}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="price_discount_left">
                                                        <p className="home_primary table_price">{item.price}</p>
                                                        <div className="cross_icon">
                                                            <img className="close_icon" src={require('../assest/icon/closeicon.png')} />
                                                        </div>
                                                    </div>
                                                    {/* <hr /> */}
                                                </div>

                                            ))
                                        }
                                    </div>

                                    <div className="checkout_apply_bar">
                                        <div className="apply_section">
                                        
                                            <input className="input_info" type="text" placeholder="Input" />
                                            <div>

                                                <button className="apply_btn h_xl_heading">Apply</button>
                                            </div>
                                            

                                        </div>
                              
                                        <div className="order_discount">
                                            <div className="order_total">
                                                <div className="home_weight_fourth">JenkateMW</div>
                                                <div className="price_discount_remove">-$25.00[Remove]</div>
                                            </div>
                                            <div className="order_total">
                                                <div className="home_weight_fourth">Shipping</div>
                                                <div className="home_weight_second">Free</div>
                                            </div>
                                            <div className="order_total">
                                                <div className="home_weight_fourth">Subtotal</div>
                                                <div className="home_weight_second">$99.00</div>
                                            </div>
                                            <hr />
                                            <div className="order_total ">
                                                <h2 className="hero_xl_text">Total</h2>
                                                <div className="hero_xl_text">$234.00</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="place_order_btn">
                        <button className="place_order h_xl_heading">Place Order</button>

                    </div>

                </div>
            </div>
        </>
    )
}
export default CheckOut