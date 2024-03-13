import AboutSection from "../../Home_section/about_section"
import Arrival from "../../Home_section/arrival_page"
import HeroSection from "../../Home_section/hero_section"
import Shipping from "../../Home_section/shipping_section"
import YourCart from "../cart_section"




const Home = () => {
    return (
        <>
            <HeroSection />
            <Arrival />
            <Shipping />
            <YourCart/>
            <AboutSection />
        </>
    )
}
export default Home