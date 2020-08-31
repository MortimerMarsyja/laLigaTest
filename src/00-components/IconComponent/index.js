import * as React from "react"


const IconComponent = ({color,fill,size,icon,strokeWidth}) => {
  return (
    <svg viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={fill}
    strokeWidth={strokeWidth}
    >
      {icon}
    </svg>
  )
}

export default IconComponent;