import React from "react";
import "./Header.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="logo-div">
                        <img className="img-fluid" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#cart">
                                <FiShoppingCart />
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link className="signup-btn" href="#signup">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
