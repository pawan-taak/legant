
import { Link, Outlet } from "react-router-dom"
import "../../assest/css/signup.css"
function SignUp() {
    return (
        <>
            <div className="container">
                <div className="main-section">
                    <div className="rigth-section">
                        <h2 className="hero-x-heading main-text">3legant.</h2>
                        <img src={require("../../assest/img/signup.png.png")} alt="#" className="img-signup" />
                    </div>
                    <div className="left-section">
                        <div className="text-left-section">
                            <div className=" sign-section">
                                <h1 className="hero_big_heading">Sign Up</h1>
                                <p className="home_weight_fourth ">Already have an account?<Link to="/signin"><span className="in-text">Sign in</span></Link> </p>
                            </div>
                            <div className="form-section">
                                <input type="text" placeholder="your name" className="input-text" /><hr />
                                <input type="text" placeholder="user name" className="input-text" /><hr />
                                <input type="text" placeholder="Email Address" className="input-text" /><hr />
                                <input type="password" placeholder="password" className="input-text" />
                                {/* <img src={require("../../assest/img/eys-img.jpg" )} className="icon-img"/> */}
                                <hr />
                                <p className="home_weight_second checkbox"><input type="checkbox" /> <span className="signup-info">I agree with</span> Privacy Policy <span className="signup-info">and</span> Terms of Use</p>
                            </div>
                            <button type="submit" onClick={SignUp} className="signupbtn home_weight_third">Sign Up</button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignUp