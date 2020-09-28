import React from 'react';
//styles
import {StyledText} from './selfEditingText.style'

const SelfEditingText = ({isEdited,value,onChange,onSubmit,label}) => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt)
  }

  return(
    <StyledText>
      {isEdited?
      <form onSubmit={handlerSubmit}>
        <label>{label}
          <input placeholder={'press intro to edit'} onChange={e => onChange(e.target.value)}/>
        </label>
      </form>
      :value}
    </StyledText>
  )
}

export default SelfEditingText;