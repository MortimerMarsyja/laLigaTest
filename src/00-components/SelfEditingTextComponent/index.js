import React from 'react';
//styles
import {StyledText} from './selfEditingText.style'

const SelfEditingText = ({isEdited,value,onChange, onSubmit}) => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt)
  }

  return(
    <StyledText>
      {isEdited?
      <form onSubmit={handlerSubmit}>
        <input placeholder={value} onChange={e => onChange(e.target.value)}/>
      </form>
      :value}
    </StyledText>
  )
}

export default SelfEditingText;