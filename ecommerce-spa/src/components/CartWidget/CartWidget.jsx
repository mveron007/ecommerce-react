import React from 'react'
import '../../App.css';
import { IconContext } from "react-icons";
import {RiShoppingCartLine} from 'react-icons/ri';

const CartWidget = () => {
  return (
    <div>
        
        <span>
            <IconContext.Provider value={{ color: "#fff", size:"2em", className: "global-class-name" }}>
            <div>
                <RiShoppingCartLine />
            </div>
            </IconContext.Provider>
            
            <strong className='whiteText'> Carrito</strong>
        </span>
    </div>
  )
}

export default CartWidget