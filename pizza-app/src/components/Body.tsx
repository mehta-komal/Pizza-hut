import React from 'react';
import pizza from './data/pizza';
import PizzaItems from './PizzaItems';

const Body: React.FC = () => {
  const data = pizza;
 
  return (
    <div className='body'>
      {data.map((item, index) => (
        <PizzaItems pizza={item} key={index} />
      ))}
    </div>
  );
};

export default Body;
