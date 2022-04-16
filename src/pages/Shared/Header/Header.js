import React from "react";
import "./Header.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="logo-div d-flex">
                        <img className="img-fluid" src={logo} alt="" />
                        <div className="ms-4">{user && <p className="username">{user.displayName}</p> }</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/cart">
                                <FiShoppingCart />
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? '' : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            {
                                user ? <button onClick={() => signOut(auth)} className="sign-out-btn">Sign Out</button> : <Nav.Link className="signup-btn" as={Link} to="/signup">Sign up</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
