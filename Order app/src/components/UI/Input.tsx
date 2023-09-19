import classes from './Input.module.css'

interface InputProps{
 input:{
  name: string;
  
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
 
 },
 label:string
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.name}>{props.label}</label>
      <input {...props.input}/>
    </div>
  )
}

export default Input
