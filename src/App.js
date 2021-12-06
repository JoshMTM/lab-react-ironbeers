import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MyNav from './components/MyNav';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [beers, setBeers] = useState([]);
  const urlApi = 'https://ih-beers-api2.herokuapp.com/beers';

  useEffect(() => {
    async function getBeers() {
      const response = await axios.get(urlApi);
      setBeers(response.data);
    }
    getBeers();
  }, []);
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" element={<Beers beers={beers} />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/beers/random" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
