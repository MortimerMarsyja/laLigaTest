import React from "react";
import RenderTextComponent from './RenderTextComponent';
import RenderFormComponent from './RenderFormComponent';

const RenderComposedUIComponent = ({editing,keys,values,setValues,idToUpdate,isEditedFunction,endEditionHandler}) => {
  return(
    <>  
      {editing ? 
        <RenderFormComponent 
          keys={keys} 
          values={values} 
          setValues={setValues} 
          idToUpdate={idToUpdate} 
          onSubmit={isEditedFunction} 
          endEditionHandler={endEditionHandler}
        /> : 
        <RenderTextComponent 
          keys={keys} 
          values={values}
        />
      }
    </>
  );
}

export default RenderComposedUIComponent;