import React from "react";
import Card from "../snippets/card";
import '../assest/css/arrival_page.css'

function Arrival(){
    const data=[
       
        {
            image: 'sofa.png',
            stars: 5,
            title: 'Loveseat Sofa',           
            price: '$199.00',
        },
        {
            image: 'table_lamp.png',
            stars: 5,
            title: 'Table Lamp',           
            price: '$240',
        },
        {
            image: 'lamp.png',
            stars: 5,
            title: 'Beige Table Lamp',           
            price: '$180',
        },
        {
            image: 'basket.png',
            stars: 5,
            title: 'Bamboo basket',            
            price: '$130',
        },
    ]
    return(
        <>
        <div className="container">
            <div>
            {
                    data.map((item, index) => {
                        return (
                            <>
                            <div>{item?.price}</div>
                            </>
                            // <Card key={index + new data()} data={item}/>
                        )
                    })
                }
            </div>

        </div>
        
        
        </>
    )
}
export default Arrival