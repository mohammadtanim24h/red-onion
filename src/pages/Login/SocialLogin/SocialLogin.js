import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/icons8-google.png";
import facebook from "../../../images/social/icons8-facebook.png";
import twitter from "../../../images/social/icons8-twitter.png";
import github from "../../../images/social/icons8-github.png";


const SocialLogin = () => {
    return (
        <div className="my-3">
            <div className="d-flex justify-content-center align-items-center">
                <div className="or-div"></div>
                <div className="mx-2">Or</div>
                <div className="or-div"></div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <img style={{cursor: 'pointer'}} className="img-fluid me-3" src={google} alt="" />
                <img style={{cursor: 'pointer'}} className="img-fluid me-3" src={facebook} alt="" />
                <img style={{cursor: 'pointer'}} className="img-fluid me-3" src={github} alt="" />
                <img style={{cursor: 'pointer'}} className="img-fluid" src={twitter} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;
