import React from 'react';
import useFood from '../../../hooks/useFood';
import Food from '../../Shared/Food/Food';
import './Breakfast.css';

const Breakfast = () => {
    const foods = useFood();
    const breakfastFoods = foods?.filter(food => food.category === 'breakfast');
    return (
        <div className='row g-5 mt-2 mb-5'>
            {
                breakfastFoods?.map(food => <Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default Breakfast;