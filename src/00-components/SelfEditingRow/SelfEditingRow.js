import React,{useState, useCallback, useEffect} from 'react';
//components
import SelfEditingText from '../SelfEditingTextComponent';
//styles
import {StyledRow} from './selfEditingRow.style';


const SelfEditingRow = ({label, value, isEditedFunction, idToUpdate,editingStatus}) => {
  const [editing,setEditing] = useState(false);
  const [textValue,setTextValue] = useState(value);
  const changeHandler = useCallback(value => setTextValue(value), []);
  const endEditionHandler = useCallback(() => {
    isEditedFunction(idToUpdate,{[label]:textValue})
    setEditing(false);
  }, [idToUpdate, isEditedFunction, label, textValue]);

  useEffect(() => {
    setEditing(editingStatus)
  }, [editingStatus])

  return(
    <StyledRow>
      <SelfEditingText 
        value={textValue} 
        isEdited={editing} 
        onChange={changeHandler}
        onSubmit={endEditionHandler}
        label={label}
      />
    </StyledRow>
  )
}

export default SelfEditingRow;