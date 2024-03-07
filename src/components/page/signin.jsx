import { Link } from 'react-router-dom'
import '../../assest/css/signin.css'

function SignIn() {
    return (
        <>
            <div className='container'>
                <div className='signin-main-section'>
                    <div className='signin-rigth-section'>
                        <h2 className="hero-x-heading  signin-main-text">3legant.</h2>
                        <img src={require("../../assest/img/signup.png.png")} alt="#" className='sigin_image' />
                    </div>
                    <div className='signin-left-section'>
                        <div className='signin-section-left'>
                            <div className='signin-text'>
                                <h1 className="hero_big_heading">Sign In</h1>
                                <p className='home_weight_second dont-color' >Don’t have an accout yet?<Link to="/signup"><span className='text-colur'>Sign Up</span></Link></p>
                            </div>
                            <div className='signin-bottom-section'>
                                <input type="text" placeholder=' Your Usernam or Email Address' className="input-signin" /><hr />
                                <input type="password " placeholder="Password" name="psw-repeat" className="input-signin" /><hr />
                                <div className="remember">
                                    <p className="home_weight_fourth text-remember"><input type="checkbox" />Remember me</p>
                                    <h2 className='home_weight_second'>Forgot password?</h2>
                                </div>
                            </div>
                            <Link to="/" className="signin-btn home_weight_third">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default SignIn