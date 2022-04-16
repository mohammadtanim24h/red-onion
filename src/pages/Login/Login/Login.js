import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);
    return (
        <div className="d-flex justify-content-center mt-5 sign-in-up">
            <div>
                <img className="logo" src={logo} alt="logo" />
                <form onSubmit={handleLogin} className="custom-form">
                    <input name="email" type="email" placeholder="Email" />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <p className="ms-1">
                        Forgot Password?{" "}
                        <span className="theme-text">Reset Now</span>
                    </p>
                    <button type="submit" className="submit-btn">
                        Login
                    </button>
                    <p className="mt-3 mb-2 ms-1">
                        Don't have an account?{" "}
                        <Link to="/signup" className="theme-text">
                            Sign Up
                        </Link>
                    </p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
