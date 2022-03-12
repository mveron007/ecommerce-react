import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { productos } from '../../helpers/productos'

const ItemListContainer = (props) => {
  const onAdd = ()=>{
        // const auxValue = document.getElementById("countInput").value;
        // alert(`Cantidad agregada: ${auxValue}`);
        console.log("onAdd activado");
    }
  return (
    <div>
      {props.greeting}

      <ItemCount stock={3} initial={1} onAdd={onAdd}></ItemCount>

      <ItemList items={productos}></ItemList>
    </div>
  )
}

export default ItemListContainer