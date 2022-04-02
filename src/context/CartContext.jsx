import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const useCartContext = ()=> useContext(CartContext);

export const CartProvider = ({children}) =>{
    const  [productList, setProductList] = useState([]);


    const addToCart=(item, qty)=>{
        if (!isInCart(item.id)) {
            console.info(`EXTRA: ${qty}`)
            setProductList( [ ...productList, {
                id:uuidv4(), 
                category: item.category, 
                title: item.title, 
                price: item.price, 
                pictureUrl: item.pictureUrl, 
                quantity: qty} ] )
        }
    }

    const remove = (itemId)=>{
        console.log(itemId);
        if (itemId) {
            const auxArray = productList.filter(prod=> prod.id !== itemId);
            setProductList(auxArray);
            console.log(`Remove done: ${productList}` );   
        }else{
            console.error("Error");
        }
        
    }
    
    const clear= () =>{
        setProductList([])
    }

    const isEmpty = () =>{
        console.log(productList.length);
        return productList.length === 0 ? true : false; 
    }

    const isInCart = (id)=>{
        return productList.includes(prod => prod.id === id);
    }


    const totalBill = () => {
        return productList.reduce((acum, prod) => acum = acum + (prod.price * prod.quantity), 0);
    };

    const totalQty = () =>{
        return productList.reduce((acum, prod) => acum = acum += prod.quantity, 0);
    }


    return <CartContext.Provider value={{
            isEmpty,
            productList,
            totalBill,
            totalQty,
            addToCart,
            remove,
            clear
        }}>
            {children}
        </CartContext.Provider>
}