import React from 'react';
import useFood from '../../../hooks/useFood';

const Dinner = () => {
    const foods = useFood();
    const dinnerFoods = foods?.filter(food => food.category === 'dinner');
    console.log(dinnerFoods);
    return (
        <div>
            <h2>Dinner</h2>
        </div>
    );
};

export default Dinner;