import React from 'react';
import SeedTileRow from './SeedTileRow.jsx';
import { randomizeActionCreator } from '../actions/actions.js';

const SeedEditor = (props) => {
  const { dispatch, seedTiles } = props;
  // loop to create array of seed tile rows
  const rows = [];
  for (let i = 0; i < seedTiles.length; i++) {
    rows.push(
      <SeedTileRow id={i} key={i} dispatch={dispatch} seedRow={seedTiles[i]} />
    );
  }

  return (
    <div className='seedEditor'>
      <h2>seed editor</h2>
      <button onClick={() => dispatch(randomizeActionCreator())}>RANDOM</button>
      {rows}
    </div>
  );
};

export default SeedEditor;
