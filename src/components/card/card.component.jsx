import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      src={`https://robohash.org/${props.item.id}?set=set4&size=180x180`}
      alt={props.item.name}
    />
    <h2>{props.item.name}</h2>
    <p>{props.item.email}</p>
  </div>
);
