import React from 'react';
import SeedTileRow from './SeedTileRow.jsx';

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
    <div key='seed editor'>
      <h2>seed editor</h2>
      {rows}
    </div>
  );
};

export default SeedEditor;
