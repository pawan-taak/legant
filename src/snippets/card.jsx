import React from "react";

const Card = ({ data }) => {
    console.log(data)
    return (

        <>
            <div className="arrival_discount home_weight_first">
                <p className="discount_text">NEW</p>
                <p className="discount_percent">-50%</p>
            </div>
            <div className="shoping">
            {
                data?.image && <><img src={require(`../assest/img/hero_img/${data?.image}`)} alt="" className="arrival_img" /></>
            }
            
            <p className="home_weight_second">{data?.title}</p>
            <p className="home_primary">{data?.price}</p>
            </div>
        </>



    )
}
export default Card