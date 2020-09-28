import React from 'react'

const RenderTextComponent = ({keys,values}) => {
  return(
    <div className='values'>
      {keys.map((key) => <h3>{values[key]}</h3>)}
    </div>
  )
}

export default RenderTextComponent;