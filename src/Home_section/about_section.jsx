import '../assest/css/about_section.css'

function AboutSection() {
    return (
        <>
            <div className='container'>
                <div className='about_main_section'>
                     <img src={require('../assest/img/hero_img/about_img.png')} alt="" className='about_image'/>
                     <div className='about_text_bar'>
                        <p className='home_weight_first'>SALE UP TO 35% OFF</p>
                        <h2 className='hero_big_heading'>HUNDREDS of New lower prices!</h2>
                        <p className='hero_sm_text'>It's more affordable than ever to give every room in your home a stylish makeover</p>

                     </div>
                </div>
            </div>

        </>
    )
}
export default AboutSection