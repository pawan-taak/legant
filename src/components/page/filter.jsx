import "../../assest/css/filter.css"
import Card from "../../snippets/card"



function Filter() {
    const data = [

        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Loveseat Sofa',
            price: '$199.00',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Luxury Sofa',
            price: '$299.00 $500.00',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Table Lamp',
            price: '$19.00',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'White Drawer unit',
            price: '$89.99',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Black Tray table',
            price: '$19.99',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Lamp',
            price: '$39.00',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Light Beige Pillow',
            price: '$3.99',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Table Lamp',
            price: '$39.99',
        },
        {
            image: 'sofa.png',
            stars: 'rating.png',
            title: 'Bamboo Basket',
            price: '$9.99',
        },




    ]
    return (
        <>
            <div className="container">
                <div className="main-shoping-section">
                    <div className="filter">
                        <div className="text-filter">
                            <img src={require("../../assest/img/filter-img/first-img.png")} className="icon-img" alt="" />
                            <p className="hero_xxl_text">Filter</p>
                        </div>
                        <div className="categories mb-section">
                            <h2 className="home_weight_second">CATEGORIES</h2>
                            <ul className="categories-room">
                                <li className="home_primary all-room">All Rooms </li>
                                <li className="home_primary all-room"> Living Room</li>
                                <li className="home_primary all-room">Bedroom</li>
                                <li className="home_primary all-room">Kitchen</li>
                                <li className="home_primary all-room">Bathroom</li>
                                <li className="home_primary all-room">Dinning</li>
                                <li className="home_primary all-room">Outdoor</li>
                            </ul>

                        </div>
                        <div className="mb-section">
                            <h2 className="home_weight_second">PRICE</h2>
                            <ul className="price">
                                <li className="coman-text home_primary all-room">All Price <input type="checkbox" /></li>
                                <li className="coman-text home_primary all-room">$0.00 - 99.99 <input type="checkbox" /></li>
                                <li className="coman-text home_primary all-room " >$100.00 - 199.99<input type="checkbox" /></li>
                                <li className="coman-text home_primary all-room ">$200.00 - 299.99<input type="checkbox" /></li>
                                <li className="coman-text home_primary all-room">$300.00 - 399.99<input type="checkbox" /></li>
                                <li className="coman-text home_primary all-room">$400.00+ <input type="checkbox" /></li>
                            </ul>

                        </div>

                    </div>


                    {/* mobile resposive */}


                    <div className="mob_fitler_section">
                        <div className="mob_fitler_text">
                            <img src={require('../../assest/img/filter-img/first-img.png')} alt="" className="mob-icon-img" />
                            <p>Filter</p>
                        </div>

                        <div className="mob_select_img">
                            <img src={require('../../assest/img/filter-img/living-third-img.png')} alt="" className="mob-icon-img" />
                            <img src={require('../../assest/img/filter-img/living-fourth-img.png')} alt="" className="mob-icon-img" />
                        </div>
                        <p>Living Room</p>
                        <p>sort by</p>
                    </div>
                    <div className="living-section">
                        <div className="living-text">
                            <div className="left-living">
                                <h2 className="hero_xxl_text ">Living Room</h2>

                            </div>

                            <div className="img-left-section">
                                <p className="home_weight_second short-text">Sort by</p>

                                <img src={require('../../assest/img/filter-img/living-first-img.png')} className="living-img mb-img" alt="#" />
                                <img src={require('../../assest/img/filter-img/living-second-img.png')} className="living-img mb-img" alt="#" />
                                <img src={require('../../assest/img/filter-img/living-third-img.png')} className="living-img" alt="#" />
                                <img src={require('../../assest/img/filter-img/living-fourth-img.png')} className="living-img" alt="#" />

                            </div>
                        </div>
                        <div>
                            <div className="living-discount">

                                {
                                    data.map((item) => {
                                        return (
                                            <div className="shop">
                                                <Card data={item} />

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="button">
                                <button className="show-button home_weight_third">Show more</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )

}
export default Filter