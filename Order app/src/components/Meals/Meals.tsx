import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"


const Meals:React.FC = () => {
  return (
    <div>
      <MealsSummary />
      <AvailableMeals />
    </div>
  )
}

export default Meals
