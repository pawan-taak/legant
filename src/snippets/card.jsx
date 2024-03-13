import React, { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ data }) => {





    console.log(data)
    return (

        <>
            <div className="arrival_discount home_weight_first">
                <div className="discount_bar">
                    <p className="discount_text">NEW</p>
                    <p className="discount_percent">-50%</p>
                </div>
                <div className="discount_btn">
                    <Link to={'/yourcart'}><button className="cart_btn">Add to cart</button></Link>
                </div>
                <Link to={'/table'}><img src={require(`../assest/img/hero_img/${data.image}`)} alt="" className="arrival_img" /></Link>



            </div>
            <p className="home_weight_second">{data?.title}</p>
            <p className="home_primary">{data?.price}</p>

        </>



    )
}
export default Card