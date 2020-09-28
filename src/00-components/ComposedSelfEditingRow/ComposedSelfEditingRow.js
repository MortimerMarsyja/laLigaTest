import React, { useState,useCallback, useEffect } from "react";
//styles
import StyledComposedSelfEditingRow from './ComposedSelfEditingRow.style';
import RenderComposedUIComponent from './RenderComposedUIComponent';

const ComposedSelfEditingRow = ({ data, idToUpdate, isEditedFunction ,editingStatus }) => {
  const [values, setValues] = useState({...data});
  const [editing,setEditing] = useState(false);

  const endEditionHandler = useCallback((label,value)=>{
    isEditedFunction(idToUpdate,{[label]:value})
    setEditing(false)
  },[idToUpdate, isEditedFunction])

  useEffect(() => {
    setEditing(editingStatus)
  }, [editingStatus])

  const keys = Object.keys(data);
  return (
    <StyledComposedSelfEditingRow>
      <RenderComposedUIComponent 
        editing={editing} 
        keys={keys} 
        values={values} 
        isEditedFunction={isEditedFunction} 
        idToUpdate={idToUpdate} 
        setValues={setValues} 
        endEditionHandler={endEditionHandler}
      />
    </StyledComposedSelfEditingRow>
  );
};


export default ComposedSelfEditingRow;
