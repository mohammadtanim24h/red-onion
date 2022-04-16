import React from 'react';
import useFood from '../../../hooks/useFood';
import Food from '../../Shared/Food/Food';

const Lunch = () => {
    const foods = useFood();
    const lunchFoods = foods?.filter(food => food.category === 'lunch');
    return (
        <div className='row g-5 mt-2 mb-5'>
            {
                lunchFoods?.map(food => <Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default Lunch;