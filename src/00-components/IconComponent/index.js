import React from "react"


const IconComponent = ({color,fill,size,icon,strokeWidth,onClick}) => {
  return (
    <svg viewBox="0 0 24 24"
    width={size}
    height={size}
    color={color}
    fill={fill}
    strokeWidth={strokeWidth}
    onClick={onClick}
    >
      {icon}
    </svg>
  )
}

export default IconComponent;