import React from "react";
import Card from "../snippets/card";
import '../assest/css/arrival_page.css'

function Arrival() {
    const data = [

        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Loveseat Sofa',
            price: '$199.00',
        },
        {
            image: 'table_lamp.png',
            stars: 'rating.png',
            title: 'Table Lamp',
            price: '$240',
        },
        {
            image: 'lamp.png',
            stars: 'rating.png',
            title: 'Beige Table Lamp',
            price: '$180',
        },
        {
            image: 'basket.png',
            stars: 'rating.png',
            title: 'Bamboo basket',
            price: '$130',
        },
    ]
    return (
        <>
            <div className="container">
                <div className="arrival_show_bar">
                    <div className="arrival_article_bar">
                        <p className="hero_big_heading">New Arrivals</p>
                        <div className="article_more_section">
                            <p className="home_weight_third">More Products</p>
                            <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" className='article_arrow' />
                        </div>
                    </div>
                    <div className="arrival_section">



                        {
                            data.map((item, index) => {
                                
                                return (
                                    <>
                                        <div>
                                            <Card data={item} />
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                </div>

            </div>


        </>
    )
}
export default Arrival