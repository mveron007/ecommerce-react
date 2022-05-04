import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getFirestore, getDoc} from 'firebase/firestore/lite';

const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {

      async function getElementById(){

        try {
          const db = getFirestore();
          const item = doc(db, 'products', id);
      
          const response = await getDoc(item);
          setProd({id: response.id, ...response.data()});
        
        } catch (error) {
          
        }
        
      }

      getElementById();
    }, [])
  return (
    <div>
        <ItemDetail item={prod}/>
    </div>
  )
}

export default ItemDetailContainer