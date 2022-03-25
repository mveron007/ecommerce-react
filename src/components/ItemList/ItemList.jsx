import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';
import { task } from '../../helpers/productos'

const ItemList = ({items}) => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    task
    .then(resp=> setProds(resp))
    .catch(err=> console.log(err))
    .finally(()=>console.log("Cargando..."))
  }, [])
  
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {items.map(item=><Item key={item.id} item={item}></Item>)}    
    </div>
  )
}

export default ItemList