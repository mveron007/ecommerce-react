import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { task } from '../../helpers/productos'

const ItemListContainer = () => {
  // const onAdd = ()=>{
  //       console.log("onAdd activado");
  //   }

  const [prods, setProds ] = useState([])
  const { categoryId } = useParams();

  useEffect(()=> {
    if (categoryId) {
        task        
        .then(resp => setProds(resp.filter(prod=> prod.category === categoryId)))
        .catch(err => console.log(err))
        // .finally(()=> setLoading(false))           
    } else {
        task        
        .then(resp => setProds(resp))
        .catch(err => console.log(err))
        // .finally(()=> setLoading(false))            
    }
}, [categoryId])

  // useEffect(()=>{
  //   const db = getFirestoreApp();

  //   const queryDoc = doc(db, 'products','8CwXbwJeqETJ185LRtWL');

  //   getDoc(queryDoc)
  //   .then(resp => console.log(resp));
  // })


  return (
    <div>
      {/* <ItemCount stock={3} initial={1} onAdd={onAdd}></ItemCount> */}

      <ItemList items={prods}></ItemList>
    </div>
  )
}

export default ItemListContainer