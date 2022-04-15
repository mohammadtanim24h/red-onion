import React from 'react';
import useFood from '../../../hooks/useFood';

const Lunch = () => {
    const foods = useFood();
    const lunchFoods = foods?.filter(food => food.category === 'lunch');
    console.log(lunchFoods);
    return (
        <div>
            <h2>Lunch</h2>
        </div>
    );
};

export default Lunch;