import React from 'react';
import useFood from '../../../hooks/useFood';
import Food from '../../Shared/Food/Food';

const Dinner = () => {
    const foods = useFood();
    const dinnerFoods = foods?.filter(food => food.category === 'dinner');
    return (
        <div className='row g-5 mt-2 mb-5'>
            {
                dinnerFoods?.map(food => <Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default Dinner;