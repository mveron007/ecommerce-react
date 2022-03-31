import React from 'react'
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
  const {productList, remove, clear} = useCartContext();
  return (
    <div>
        <h3>Cart</h3>
        <div>
          { productList.map(prod => <li key={prod.id}>
                                Nombre: {prod.title} Precio: {prod.price} 
                                cantidad: {prod.qty}

                                <button onClick={() => remove(prod.id)}>Quitar Producto</button>
                              </li>) }
        <button onClick={() =>clear()}>Vaciar Carrito</button>
      </div>

    </div>
  )
}

export default Cart