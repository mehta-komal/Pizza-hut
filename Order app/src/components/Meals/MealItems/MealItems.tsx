import classes from './MealItems.module.css'
import MealItemForm from './MealItemForm'
interface MealItemsProps{
    name:string,
    description: string,
    price: string 
}
const MealItems:React.FC<MealItemsProps>= (props) => {
    const price = `$${parseFloat(props.price).toFixed(2)}`
    console.log(price)
  return (
    <li>
        <div className={classes.meal}>
            <h3 >{props.name}</h3>
            <div className={classes.description}>{props.description.length>50 ? props.description.substring(0, 50)+"..." : props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div><MealItemForm /></div>
      
    </li>
  )
}

export default MealItems
