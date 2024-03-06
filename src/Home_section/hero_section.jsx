import '../assest/css/hero_section.css'

function HeroSection() {
    return (
        <>
            <div className='container'>
                <div className='hero_section'>
                    <img src={require('../assest/img/hero_img/hero_img.png')} alt="" />
                    <div className='hero_text_bar'>
                        <div className='hero_heading'>
                            <h1 className=' hero_primary'>Simply Unique/</h1>
                            <h1 className=' hero_primary'> Simply Better.</h1>
                        </div>
                        <div className='hero_para'>
                            <p className='home_weight_second'>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* product shop section */}
            <div className='container'>
                <div className='shop_section'>

                    <div className='shop_about_section shop_grid_living'>
                        <div className='shop_info'>
                            <p className='hero_medium_heading'>Living Room</p>
                            <div className='shop_next_arrow'>
                                <p className='shop_text home_weight_third'>Shop Now</p>
                                <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" />
                            </div>
                        </div>
                        <img src={require('../assest/img/hero_img/chair_img.png')} alt="" className='shop_main_img' />
                    </div>


                    <div className='shop_about_section'>
                        <div className='shop_info_common'>
                            <p className='hero_medium_heading'>Bedroom</p>
                            <div className='shop_next_arrow'>
                                <p className='shop_text home_weight_third'>Shop Now</p>
                                <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" />
                            </div>
                        </div>
                        <img src={require('../assest/img/hero_img/almeira_img.png')} alt="" className='shop_main_img' />
                    </div>


                    <div className='shop_about_section'>
                        <div className='shop_info_common'>
                            <p className='hero_medium_heading'>Kitchen</p>
                            <div className='shop_next_arrow'>
                                <p className='shop_text home_weight_third'>Shop Now</p>
                                <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" />
                            </div>
                        </div>
                        <img src={require('../assest/img/hero_img/oven_image.png')} alt="" className='shop_main_img' />
                    </div>

                </div>
            </div>
        </>

    )
}

export default HeroSection