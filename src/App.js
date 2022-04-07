// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

const ItemListContainer = lazy(()=> import('./components/ItemListContainer/ItemListContainer'))

function App() {
  const [location, setLoc] = useState("");
  useEffect(() => {
    const urlCountry = 'https://ip-api.com/json';
    const countryName = fetch(urlCountry)
    .then(function (response){
      return response.json();
    })
    .then(function (payload) {
      setLoc(payload.city);
    });
  
  }, [])
  
  
  

  return (
    <Router>

      <CartProvider>
      <div className="App">
        <header>
          <Navbar country={location}></Navbar>
        </header>
        <Suspense fallback={<h1>Cargando ...</h1>} >
          <Routes>

            <Route 
              path="/category/:categoryId" 
              element= {
                <ItemListContainer/>
              }
            />

            <Route 
              path='item/:id'
              element= {
                <ItemDetailContainer/>  
              }
            />

            <Route 
              path='/cart'
              element={<Cart />}
            />

            <Route path='/' element={ <ItemListContainer greeting="Hola, su carrito está vacío" /> } />

          </Routes>
        </Suspense>
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;
