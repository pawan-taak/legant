import '../assest/css/about_section.css'

function AboutSection() {
    return (
        <>
            <div className='container'>
                <div className='about_main_section'>
                    <img src={require('../assest/img/hero_img/about_img.png')} alt="" className='about_image' />
                    <div className='about_text_bar'>
                        <p className='home_weight_first'>SALE UP TO 35% OFF</p>
                        <h2 className='hero_big_heading'>HUNDREDS of New lower prices!</h2>
                        <p className='hero_sm_text'>It's more affordable than ever to give every room in your home a stylish makeover</p>

                    </div>
                </div>
            </div>

            {/* article section */}

            <div className='container'>

                <div className='article_heading'>
                    <p className='hero_big_heading'>Articles</p>
                    <div className='article_more_section'>
                        <p className='home_weight_third'>More Articles</p>
                        <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" className='article_arrow' />
                    </div>
                </div>

                <div className='article_section'>

                    <div className='about_article_bar'>
                        <img src={require('../assest/img/hero_img/home.png')} alt="" className='article_image' />
                        <div className='article_text'>
                            <p className='hero_xl_text'>7 ways to decor your home</p>
                            <div className='article_click_section'>
                                <p className='home_weight_third'>Read More</p>
                                <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" className='article_arrow' />
                            </div>
                        </div>
                    </div>

                    <div className='about_article_bar'>
                        <img src={require('../assest/img/hero_img/kitchen.png')} alt="" className='article_image' />
                        <div className='article_text'>
                            <p className='hero_xl_text'>Kitchen organization</p>
                            <div className='article_click_section'>
                                <p className='home_weight_third'>Read More</p>
                                <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" className='article_arrow' />
                            </div>
                        </div>
                    </div>

                    <div className='about_article_bar'>
                        <img src={require('../assest/img/hero_img/badroom.png')} alt="" className='article_image' />
                        <div className='article_text'>
                            <p className='hero_xl_text'>Decor your bedroom</p>
                            <div className='article_click_section'>
                                <p className='home_weight_third'>Read More</p>
                                <img src={require('../assest/img/hero_img/arrow-right.png')} alt="" className='article_arrow' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default AboutSection