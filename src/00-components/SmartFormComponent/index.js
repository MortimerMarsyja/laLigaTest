//{value,label,onChange}
import React,{useEffect,useState} from 'react';

const SmartInput = ({value,label,onChange}) => {
  return(
    <label>
      {label}
      <input value={value} onChange={(e)=>onChange(e,label)}/>
    </label>
  )
}
/**
 * Represents a smart form.
 * @param {object} objectsInput - This object will be treated as the initial values of the form.
 * @param {boolean} isEditing - This boolean value, represents when the form is in edition state.
 * @param {function} onSubmit - This function, is the function that will be deployed when the form is submited.
 */

 //objectsInput(user:juan,second_name:pablo)
const SmartForm = ({isEditing,objectsInput,onSubmit}) => {
  const [copy,setCopy] = useState({})
  const [editing,setEditing] = useState(false);
  useEffect(()=>{
    if(isEditing){
      setEditing(true);
      setCopy({...objectsInput});
    }
  },[isEditing, objectsInput])
  const handlerChangeCopy = (evt,key) => {
    setCopy((prev)=>({...prev,[key]:evt.target.value}))
  }
  const handlerSubmit = () => {onSubmit(copy)};
  const keysArr = Object.keys(objectsInput)
  //create Onchange for the form inputs
  return(
    editing?
    <form onSubmit={handlerSubmit}>
      {Object.keys(copy).map((key)=>
       <SmartInput value={copy[key]} label={key} onChange={handlerChangeCopy}/>)
      }
      <input type="submit" value="Submit" />
      <button onClick={()=>setEditing(false)}>&times;</button>
    </form>:
    <>
      {keysArr.map((key)=><p>{objectsInput[key]}</p>)}
    </>
  )
}