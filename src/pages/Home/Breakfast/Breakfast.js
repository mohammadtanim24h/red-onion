import React from 'react';
import useFood from '../../../hooks/useFood';

const Breakfast = () => {
    const foods = useFood();
    const breakfastFoods = foods?.filter(food => food.category === 'breakfast');
    console.log(breakfastFoods);
    return (
        <div>
            <h2>Breakfast</h2>
        </div>
    );
};

export default Breakfast;