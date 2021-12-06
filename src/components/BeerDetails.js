import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BeerDetails() {
  const { id } = useParams();
  const [oneBeer, setoneBeer] = useState([]);

  const urlApi = 'https://ih-beers-api2.herokuapp.com/beers';

  useEffect(() => {
    async function getOneBeer() {
      const response = await axios.get(`${urlApi}/${id}`);
      setoneBeer(response.data);
    }
    getOneBeer();
  }, [id]);
  return (
    <div>
      <h1>Beer Details</h1>
      <img style={{ width: '150px' }} src={oneBeer.image_url} alt="imgBeer" />

      <h4>{oneBeer.name}</h4>
      <h5>{oneBeer.first_brewed}</h5>
      <p>{oneBeer.attenuation_level}</p>
      <p>{oneBeer.description}</p>
    </div>
  );
}

export default BeerDetails;
