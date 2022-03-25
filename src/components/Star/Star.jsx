import React from 'react'
import { FaStar } from "react-icons/fa";

const Star = ({filled, onClickChange}) => {
  return (
    <div>
        <FaStar 
            color={filled ? "orange" : "lightgray"} 
            onClick={onClickChange} />
    </div>
  )
}

export default Star