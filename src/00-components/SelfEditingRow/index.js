import React,{useState, useCallback} from 'react';
//components
import SelfEditingText from '../SelfEditingTextComponent';
//styles
import {StyledRow} from './selfEditingRow.style';

const SelfEditingRow = ({value}) => {
  const [isEditing,setEdititng] = useState(false);
  const [textValue,setTextValue] = useState(value)

  const handlerChange = useCallback(value => setTextValue(value), []);
  const handlerEndEdit = useCallback(() => setEdititng(false), []);

  console.log(isEditing);
  return(
    <StyledRow>
      <SelfEditingText 
        value={textValue} 
        isEdited={isEditing} 
        onChange={handlerChange}
        onSubmit={handlerEndEdit}
      />
      <button onClick={()=>setEdititng(!isEditing)}>edit</button>
      <button>erase</button>
    </StyledRow>
  )
}

export default SelfEditingRow;