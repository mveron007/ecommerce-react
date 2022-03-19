import React, {useEffect, useState, useParams} from 'react'
import { productos } from '../../helpers/productos'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({idDetail}) => {

    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
    const getElementById =
        new Promise((resolve, reject)=>{
        let aux = true;
        if (aux) {
          setTimeout(()=>{
            setProd(productos.find(element => element.id === idDetail));
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