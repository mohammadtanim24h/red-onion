import React from "react";
import "./SignUp.css";
import logo from '../../../images/logo2.png';
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="d-flex justify-content-center mt-5 sign-in-up">
            <div>
                <img src={logo} alt="logo" />
                <form className="custom-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit" className="submit-btn">Sign Up</button>
                    <p className='mt-3 mb-2 ms-1'>Already registered? <Link to='/login' className='theme-text'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
