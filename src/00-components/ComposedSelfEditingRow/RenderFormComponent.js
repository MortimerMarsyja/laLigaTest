import React from 'react';
//components
import SelfEditingTextComponent from '../SelfEditingTextComponent';

const RenderFormComponent = ({keys,values,setValues,idToUpdate,onSubmit,endEditionHandler}) => {
  return(
    <>
      {
        keys.map((key) => {
          return(<SelfEditingTextComponent
            key={key}
            label={key}
            value={values[key]}
            isEdited={() => onSubmit(idToUpdate)}
            onSubmit={() => endEditionHandler(key,values[key])}
            onChange={(e) => setValues(values[key] = e)}
          />)
        })
      }
    </>
  )
}

export default RenderFormComponent;