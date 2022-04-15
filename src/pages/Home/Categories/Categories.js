import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    return (
        <div className='category-links'>
            <Link to='/breakfast'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
        </div>
    );
};

export default Categories;