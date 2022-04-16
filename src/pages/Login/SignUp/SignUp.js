import React, { useEffect, useState } from "react";
import "./SignUp.css";
import logo from "../../../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    //update user name
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [error, setError] = useState("");

    //form submit
    const handleSignup = async (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confPass = e.target.confirmPass.value;
        if (password !== confPass) {
            setError("Password and Confirm password must match");
            return;
        } else {
            setError("");
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);
    return (
        <div className="d-flex justify-content-center mt-5 sign-in-up">
            <div>
                <img className="logo" src={logo} alt="logo" />
                <form onSubmit={handleSignup} className="custom-form">
                    <input name="name" type="text" placeholder="Name" />
                    <input name="email" type="email" placeholder="Email" />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        name="confirmPass"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="submit-btn">
                        Sign Up
                    </button>
                    <p className="mt-3 mb-2 ms-1">
                        Already registered?{" "}
                        <Link to="/login" className="theme-text">
                            Login
                        </Link>
                    </p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;
