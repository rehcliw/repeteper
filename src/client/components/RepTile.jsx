import React from 'react';
import RepSubTile from './RepSubTile.jsx';

const RepTile = (props) => {
  const { tileConfig } = props;

  const rows = [];
  for (let i = 0; i < tile.length; i++) {
    rows.push(
      <RepSubTileRow id={i} key={i} seedRow={seedTiles[i]} />
    );
  }

  return (
    <div>
      reptile
      <RepSubTile />
    </div>
  );
};

export default RepTile;
