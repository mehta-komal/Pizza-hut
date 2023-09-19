import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src="https://media.istockphoto.com/id/1058608688/photo/new-pizza-shots.jpg?s=612x612&w=0&k=20&c=ORWiofwi4YRLMtk9feB0Vrf0r6Y9BfyJXASadQPDLaU="></img>
      </div>
    </>
  )
}

export default Header
