import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
import "./Home.css";

const Home = () => {
    console.log('tset');
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
            <div style={{minHeight: '90vh'}} className="container"> {/*eikhane height deya hoise jate food load houar shomoy layout break na kore. minHeight use kora hoise jate minimum 90vh jayga ney. beshi jaygar dorkar porle barbe. height fixed thakle beshi food ashle problem hoito*/}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
