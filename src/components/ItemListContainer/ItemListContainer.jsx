import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading';
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore/lite';

const ItemListContainer = () => {
  const [ loading, setLoading ] = useState(true);
  const [prods, setProds ] = useState([]);
  const { categoryId } = useParams();

  useEffect(()=>{
    async function getAll(){

        const db = getFirestore();

        const itemCollection = collection(db, 'products');

        if (categoryId) {
          const categoryFilter = query(itemCollection, where('categoryId', '==', categoryId));
          const resp = await getDocs(categoryFilter);

          setProds(resp.docs.map( prod => ({id: prod.id, ...prod.data()})));
          console.log(`Productos ${prods}`);
          setLoading(false);
        }else{
          const resp = await getDocs(itemCollection, orderBy("categoryId"), limit(20));
          setProds(resp.docs.map( prod => ({id: prod.id, ...prod.data()})));
          setLoading(false);
        }  
      
    }

    getAll();
  }, [categoryId])


  return (
    <div>
      {
        loading 
        ? 
        <Loading/> 
        :
        <ItemList items={prods} />
      }
    </div>
  )
}

export default ItemListContainer