import React from "react";

const Card = ({ data }) => {

    return (

        <>
            <div className="arrival_discount home_weight_first">
                <p className="discount_text">NEW</p>
                <p className="discount_percent">-50%</p>
            </div>
            <img src={require(`../assest/img/hero_img/${data.image}`)} alt="" className="arrival_img" />
            <p className="home_weight_second">{data?.title}</p>
            <p className="home_primary">{data?.price}</p>
        </>



    )
}
export default Card