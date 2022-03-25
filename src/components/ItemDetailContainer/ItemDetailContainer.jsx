import React, {useEffect, useState} from 'react'
import { productos } from '../../helpers/productos'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {
    const getElementById =
        new Promise((resolve, reject)=>{
        let aux = true;
        if (aux) {
          setTimeout(()=>{
            setProd(productos.find(element => element.id === parseInt(id)));
            console.log(prod.title);
            resolve(prod);
          }, 2000);
        }else{
          reject('400 - not found');
        }
      });
    })
  return (
    <div>
        <ItemDetail item={prod}/>
    </div>
  )
}

export default ItemDetailContainer