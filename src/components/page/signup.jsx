
import { Link, Outlet } from "react-router-dom"
import "../../assest/css/signup.css"
function SignUp() {



const handleSubmit=async()=>{
try {
    
    let obj={
        "Firstname":"pawan",
        "Lastname":"taak",
        "email":"pawak@gmal.com",
        "password":"123456",
      }
    await fetch('http://localhost:3007/user/register',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(obj)
    })

} catch (error) {
    
}
}
    return (
        <>
            <div className="container">
                <div className="main-section">
                    <div className="rigth-section">
                
                        <h2 className="hero-x-heading main-text"><Link to={'/home'}>3legant.</Link></h2>
                        <div className="img-signup">
                            <img src={require("../../assest/img/signup.png.png")} alt="#" />
                        </div>

                    </div>

                    <div className="text-left-section">
                        <div className=" sign-section">
                            <h1 className="hero_big_heading">Sign Up</h1>
                            <p className="home_weight_fourth ">Already have an account?<Link to="/signin"><span className="in-text">Sign in</span></Link> </p>
                        </div>
                        <div className="form-section">
                            <input type="text" placeholder="First name" className="input-text"/><hr />
                            <input type="text" placeholder="Last name" className="input-text" /><hr />
                            <input type="text" placeholder="Email Address" className="input-text" /><hr />
                            <input type="password" placeholder="password" className="input-text" />
                            {/* <img src={require("../../assest/img/eys-img.jpg" )} className="icon-img"/> */}
                            <hr />
                            <p className="h_sm_heading checkbox"><input type="checkbox" /> <span className="signup-info">I agree with</span> Privacy Policy <span className="signup-info">and</span> Terms of Use</p>
                        </div>
                        <button type="submit" onClick={()=>handleSubmit()} className="signupbtn home_weight_third">Sign Up</button>

                    </div>

                </div>
            </div>
        </>
    )

}

export default SignUp



// import React, { useState, useRef } from "react";
// // import { Outlet, Link } from "react-router-dom";
// const Loginform = () => {
//   const formEl = useRef();
//   let initialForm = {
//     username: "",
//     password: "",
//   };

//   let [formData, setFormData] = useState({initialForm});
//   let [resMsg, setresMsg] = useState("");

//   let setdata = (e) => {
//     setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
//   };

//   let formSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.username === "") {
//       setresMsg("Please enter your user name");
//     }
//     if (formData.password === "") {
//       setresMsg("Please enter your password");
//     }
//     var requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//         // Authorization : localStorage.getItem("")
//       },
//       body: JSON.stringify(formData),
//     };

//     let request = fetch("http://localhost:4001/user/getuserdata", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         localStorage.setItem('token', result.token)
//         console.log();
//         formEl.current && formEl.current.reset(); // reset form data
//         setFormData(initialForm);
//         alert(result.message);
//       });
//   };

//   return (
//     <>

//       <section className="user_login">
//         <div className="container">
//           <div className="user_main">
//             <form
//               action=""
//               className="user_info"
//               ref={formEl}
//               onSubmit={(e) => formSubmit(e)}
//             >
//               <h1 className="register_user_h1">Login</h1>
//               <input
//                 type="text"
//                 placeholder="Username or mobile"
//                 className="user_register_input"
//                 onChange={(e) => setdata(e)}
//                 name="username"
//               />
//               <input
//                 type="text"
//                 placeholder="Password"
//                 className="user_register_input"
//                 onChange={(e) => setdata(e)}
//                 name="password"
//               />
//               <button type="submit" className="login_register">
//                 Login
//               </button>
//               <a href="/forgetpassword" className="register_now">
//                 Don't have Account ? forgetpassword
//               </a>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Loginform;