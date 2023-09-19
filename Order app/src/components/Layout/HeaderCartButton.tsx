import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
   
      <button className={classes.button }>
        <span className={classes.icon}><ShoppingCartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
   
  )
}

export default HeaderCartButton
