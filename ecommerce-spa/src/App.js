// import logo from './logo.svg';
import './App.css';
import React  from 'react';
import Navbar from './components/Navbar';


function App() {
  const countryName = fetch('http://ip-api.com/json')
    .then(function (response){
      return response.json();
  })
  .then(function (payload) {
    console.log(payload.country);
  });
  

  return (
    <div className="App">
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <Navbar country="Argentina"></Navbar>
      </header>
    </div>
  );
}

export default App;
