import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="search-container">
                    <div>
                        <h2 className="banner-text">
                            Best food waiting for your belly
                        </h2>
                        <div className="search-area">
                            <input
                                type="text"
                                placeholder="Search Food Items"
                            />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <Categories></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
