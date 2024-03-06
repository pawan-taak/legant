
import { useState } from 'react'
import '../assest/css/about_table.css'
function Table() {
    const [count, setcount] = useState(0)
    return (
        <>
            <div className='container'>
                <div className='section tray_table'>
                    <div className='table_sectoin_right'>
                        <div className='table_img'>
                            <img className='big_table' src={require('../assest/img/about_table_img/bigtable.png')} />
                        </div>
                        <div className='various_table_img'>
                            <div><img className=' various_table' src={require('../assest/img/about_table_img/blacktable.png')} /></div>
                            <div><img className=' various_table' src={require('../assest/img/about_table_img/Paste Image.png')} /></div>
                            <div><img className=' various_table' src={require('../assest/img/about_table_img/table.png')} /></div>
                        </div>
                    </div>
                    <div className='table_sectoin_left'>
                        <div className='about_tables'>
                            <div className='rating_section'>
                                <div className='review_star'>
                                    <img className='rating' src={require('../assest/icon/about_table_icon/start_rating.png')} />
                                    <img className='rating' src={require('../assest/icon/about_table_icon/start_rating.png')} />
                                    <img className='rating' src={require('../assest/icon/about_table_icon/start_rating.png')} />
                                    <img className='rating' src={require('../assest/icon/about_table_icon/start_rating.png')} />
                                    <img className='rating' src={require('../assest/icon/about_table_icon/start_rating.png')} />
                                </div>
                                <h2 className='page_middle'>11 Reviews</h2>
                            </div>

                            <h2 className='h_primary'>Tray Table</h2>
                            <p className='para h_sm_heading'>Buy one or buy a few and make every space where you sit more convenient.
                                Light and easy to move around with removable tray top, handy for serving snacks.</p>
                            <div className='price_discount'>
                                <div className='h_xl_heading'>$199.00</div>
                                <div className='hero_xl_text discount'>$400.00</div>
                            </div>
                        </div>
                        <hr />
                        <div className='expiry_offer'>
                            <h2 className='home_weight_second'>Offer expires in:</h2>
                            <div className='offer-timing hero_medium_heading'>
                                <div>
                                    <div className='remeing_offer'>02</div>
                                    <div className='home_secondary'>Day</div>
                                </div>
                                <div>
                                    <div className='remeing_offer'>12</div>
                                    <div className='home_secondary'>Hrs.</div>
                                </div>
                                <div>
                                    <div className='remeing_offer'>45</div>
                                    <div className='home_secondary'>Min.</div>
                                </div>
                                <div>

                                    <div className='remeing_offer'>05</div>
                                    <div className='home_secondary'>Sec</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='measurements'>
                            <h2 className='home_weight_second meas_heading'>Measurements</h2>
                            <div className='hero_sm_text'>17 1/2x20 5/8 "</div>
                            <h2 className='home_weight_second meas_heading'>Choose Color </h2>
                            <h2 className='hero_sm_text'>Black</h2>
                            <div className='choose_table'>
                                <img src={require('../assest/img/about_table_img/black_table.png')} />
                                <img src={require('../assest/img/about_table_img/grey_table.png')} />
                                <img src={require('../assest/img/about_table_img/red_table.png')} />
                                <img src={require('../assest/img/about_table_img/white_table.png')} />
                            </div>
                        </div>
                        <div className='cart_section'>
                            <div className='btn_section'>
                                <button className='btn' onClick={() => count > 0 && setcount(count - 1)}>-</button>
                                <button className='home_weight_second btn'>{count}</button>
                                <button className='btn' onClick={() => setcount(count + 1)}>+</button>
                            </div>

                            <div className='wishlist'>
                                <img className='like_img' src={require('../assest/icon/about_table_icon/like.png')} />
                                <h2 className='hero_weight_second'>Wishlist</h2>
                            </div>
                        </div>
                        <div className='cart_btn'>
                            <button className='add_cart hero_weight_second'>Add to Cart</button>
                        </div>
                        <hr />
                        <div>
                            <div className='no_category1'>
                                <h2 className='page_middle '>SKU</h2>
                                <div>1117</div>
                            </div>
                            <div className='no_category2'>
                                <h2 className='page_middle'>CATEGORY</h2>
                                <div>Living Room, Bedroom</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Table