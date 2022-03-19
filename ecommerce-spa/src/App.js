// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}  from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const [location, setLoc] = useState("");
  useEffect(() => {
    const urlCountry = 'http://ip-api.com/json';
    const countryName = fetch(urlCountry)
    .then(function (response){
      return response.json();
    })
    .then(function (payload) {
      setLoc(payload.city);
    });
  
  }, [])
  
  
  

  return (
    <div className="App">
      <header>
        <Navbar country={location}></Navbar>
      </header>
        <ItemListContainer greeting="Hola, su carrito está vacío"/>

        <ItemDetailContainer idDetail={1}/>
     
    </div>
  );
}

export default App;
