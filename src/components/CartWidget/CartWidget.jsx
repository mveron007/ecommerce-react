import React from 'react'
import '../../App.css';
import { IconContext } from "react-icons";
import {RiShoppingCartLine} from 'react-icons/ri';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {productList, totalQty} = useCartContext();
  const condAux= productList.length > 0 && totalQty() > 0;
  return (
    <div>
        
        <span className='position-relative'>
            <IconContext.Provider value={{ color: "#fff", size:"2em", className: "global-class-name" }}>
            <div>
                <RiShoppingCartLine />
                
                  <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${condAux ? 'd-inline':'d-none'}`} >
                    {totalQty()}
                  </span>
        
            </div>
            </IconContext.Provider>
            
            
            <strong className='whiteText'> Carrito</strong>
        </span>
    </div>
  )
}

export default CartWidget