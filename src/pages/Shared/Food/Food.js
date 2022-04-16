import React from "react";
import "./Food.css";

const Food = ({ food }) => {
    const { name, img, price } = food;
    return (
        <div className="food col-12 col-md-6 col-lg-4 text-center">
            <div>
                <img className="img-fluid w-50" src={img} alt="" />
                <h5 className="mt-3">{name}</h5>
                <h4>${price}</h4>
            </div>
        </div>
    );
};

export default Food;
