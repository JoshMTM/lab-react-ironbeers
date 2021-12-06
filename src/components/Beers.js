import React from 'react';
import { Link } from 'react-router-dom';

function Beers(props) {
  const { beers } = props;
  return (
    <div>
      <h1>Beers</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifycontent: 'spacebetween',
        }}
      >
        {!beers
          ? 'No beers available'
          : beers.map((beer) => {
              return (
                <Link to={`/beers/${beer._id}`}>
                  <div key={beer._id}>
                    <img
                      style={{ width: '150px', height: '300px' }}
                      src={beer.image_url}
                      alt="imgBeer"
                    />
                    <h4>{beer.name}</h4>
                    <p>{beer.tagline}</p>
                    <p>
                      <b>Created By: </b>
                      {beer.contributed_by}
                    </p>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Beers;
