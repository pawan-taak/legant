import { useState } from "react"


const CommonCard = ({ data }) => {
    const [counter, setcounter] = useState(0)
    return (

        <>
            <div className="cart_bar">
                    <img src={require(`../assest/img/hero_img/${data.image}`)} alt="" className="cart_img" />
                <div className="cart_title_bar">
                    <div className="cart_info">
                        <p className="home_primary">{data?.title}</p>
                        <p className="page_middle">{data?.color}</p>
                    </div>
                    <div className="cart-section-button">
                        <button onClick={() => setcounter(counter + 1)} className="btn_cart">+</button>
                        <p className='page_secondary'>{counter}</p>
                        <button onClick={() => counter > 0 && setcounter(counter - 1)} className="btn_cart">-</button>
                    </div>
                    <p className='hero_weight_second mob_cart_price'>$19.00</p>
                    <p className='hero_weight_first cart_price'>$38.00</p>
                </div>
               
            </div>

        </>



    )
}
export default CommonCard