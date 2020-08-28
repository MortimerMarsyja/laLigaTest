import React,{useState, useCallback} from 'react';
//components
import SelfEditingText from '../SelfEditingTextComponent';
//styles
import {StyledRow} from './selfEditingRow.style';

const SelfEditingRow = ({label, value , isEditedFunction,idToUpdate}) => {
  const [isEditing,setEdititng] = useState(false);
  const [textValue,setTextValue] = useState(value)

  const handlerChange = useCallback(value => setTextValue(value), []);
  const handlerEndEdit = useCallback(() => {
    setEdititng(false) 
    isEditedFunction(idToUpdate,{[label]:textValue})}
  , [idToUpdate, isEditedFunction, label, textValue]);

  return(
    <StyledRow>
      <p>{label}</p>
      <SelfEditingText 
        value={textValue} 
        isEdited={isEditing} 
        onChange={handlerChange}
        onSubmit={handlerEndEdit}
      />
      <button onClick={()=>setEdititng(!isEditing)}>edit</button>
    </StyledRow>
  )
}

export default SelfEditingRow;