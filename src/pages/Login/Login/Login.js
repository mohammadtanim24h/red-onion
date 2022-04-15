import React from 'react';
import './Login.css';
import logo from '../../../images/logo2.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="d-flex justify-content-center mt-5 sign-in-up">
            <div>
                <img src={logo} alt="logo" />
                <form className="custom-form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <p className='ms-1'>Forgot Password? <span className='theme-text'>Reset Now</span></p>
                    <button type="submit" className="submit-btn">Sign Up</button>
                    <p className='mt-3 mb-2 ms-1'>Don't have an account? <Link to='/signup' className='theme-text'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;