import "../../assest/css/shop.css"
function Shop(){
    return(
        <>
        <div className="container">
<div className="main-shop-section">
                <div className="main-shop-text">
                    <div className="shop-center-text"><ul className="home-text">
                        <li>Home</li>
                        <img src={require("../../assest/img/shop-img/center-icon.png")} className="center-icon" alt="" />
                       </ul>
                    <ul className="shop">  <li>Shop</li></ul></div>
                    
                    <p className="hero_secondary ">Shop Page</p>
                    <p className="hero_sm_text">Let’s design the place you always imagined.</p>
                </div>
                <div className="img-section">
                    <img src={require("../../assest/img/shop-img/shop-main-img.png")} alt="" />
                </div>

            </div>
            
            </div>
        </>
    )
}
export default Shop