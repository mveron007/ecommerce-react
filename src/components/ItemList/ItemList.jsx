import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {});
  
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {items.map(item=><Item key={item.id} item={item}></Item>)}    
    </div>
  )
}

export default ItemList