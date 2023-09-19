import classes from './Card.module.css'
import { PropsWithChildren } from 'react'

const Card: React.FC<PropsWithChildren<{}>>= (props) => {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  )
}

export default Card
