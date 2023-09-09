import React from 'react';
import '../App.css'

interface PizzaItemsProps {
  pizza: {
    image: string;
    name: string;
    description: string;
    price: number;
    veg: boolean
  };
}

const PizzaItems: React.FC<PizzaItemsProps> = ({ pizza }) => {
  console.log(pizza);
  return (
    <div className='pizzaItems' >
      <div className='pizzaperitems'>
      <div className='pizzaItemsOuterContainer'>
        <img style={{width:200, height:120}} src={pizza.image} alt="Pizza" />
        <div className='pizzaItemcontainer'>
          <h4 className='pizzaitemText'>{pizza.name}</h4>
          <h4 className='pizzaitemText'>{pizza.description.length>30 ? pizza.description.substring(0, 30)+"..." : pizza.description}</h4>
          <button className='pizzaitemButton'>Add To Cart</button>
          {/* <h3>{pizza.price}</h3>
          <h3>{pizza.veg}</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItems;
