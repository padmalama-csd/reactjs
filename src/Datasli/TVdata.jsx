import React from 'react';
import { tvs } from '../Data/TVslice';
import { Link } from 'react-router-dom';


function TvData() {
  return (
    <div>
      <h1>TV Device Data</h1>
      <div style={{ display: 'flex', gap: '5%' }}>
        {tvs.slice(0, 4).map((tv) => (
          <div key={tv.id} style={{ border: '1px solid #ddd', padding: '15px', width: '200px', textAlign: 'center' }}>
            <img
              src={tv.image}
              alt={tv.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{tv.name}</h3>
            <p>{tv.price}</p>
          </div>
        ))}
      </div>
      <Link to='/tvs'><button>VIEW ALL</button></Link>
    </div>
  );
}

export default TvData;
