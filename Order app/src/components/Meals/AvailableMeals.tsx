import React from "react";
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItems from "./MealItems/MealItems";
const DUMMY_PIZZA=[
    {
        "name": "Margherita Pizza",
        "description": "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil.",
        "origin": "Italy",
        "Type": "Vegetarian",
        "strength": "Strong",
        "price": "12.99",
        "image": "https://media.istockphoto.com/id/1280329631/photo/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-wooden-cutting-board-close-up.webp?b=1&s=170667a&w=0&k=20&c=_t83ocY59IayPnspluN99xOM_RQ5ytAMTfXQperbL_I="
      },
      {
        "name": "Pepperoni Pizza",
        "description": "An American favorite featuring spicy pepperoni slices, mozzarella cheese, and a rich tomato sauce.",
        "origin": "United States",
        "Type": "Non-Vegetarian",
        "strength": "Medium",
        "price": "14.99",
        "image": "https://example.com/pepperoni.jpg"
      },
      {
        "name": "Hawaiian Pizza",
        "description": "A tropical delight with ham, pineapple chunks, mozzarella cheese, and a hint of sweetness.",
        "origin": "Canada",
        "Type": "Non-Vegetarian",
        "strength": "Mild",
        "price": "13.99",
        "image": "https://example.com/hawaiian.jpg"
      },
      {
        "name": "Supreme Pizza",
        "description": "A loaded pizza with pepperoni, sausage, bell peppers, onions, mushrooms, and black olives.",
        "origin": "United States",
        "Type": "Non-Vegetarian",
        "strength": "Strong",
        "price": "16.99",
        "image": "https://example.com/supreme.jpg"
      },
      {
        "name": "Veggie Delight Pizza",
        "description": "A vegetarian delight with colorful bell peppers, onions, tomatoes, mushrooms, and black olives.",
        "origin": "Italy",
        "Type": "Vegetarian",
        "strength": "Mild",
        "price": "15.99",
        "image": "https://example.com/veggie.jpg"
      },
]

const AvailableMeals:React.FC= () => {
    const pizzaList = DUMMY_PIZZA.map(pizza=> <MealItems  key={pizza.name} name={pizza.name} description={pizza.description} price={pizza.price} />)
  return (
    <section className={classes.meals}>
        <Card>
        <ul>
      {pizzaList}
      </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
