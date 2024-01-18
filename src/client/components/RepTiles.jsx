import React from 'react';
import { useSelector } from 'react-redux';
import RepTileRow from './RepTileRow.jsx';

const RepTiles = () => {
  const tiles = useSelector((state) => state.tiles);

  // logic for repetition here. but maybe have to refer to state...
  const rows = [];
  // let currRepTileConfig = tiles.seedTiles;
  for (let i = 0; i < tiles.seedTiles.length * 2; i++) {
    // for (let j = 0; j < 5; j++) {
    rows.push(
      <RepTileRow
        seedConfig={tiles.seedTiles}
        id={i}
        key={i}
        rules={tiles.rules}
      />
    );
    // repTiles.push(<RepTile tileConfig={currRepTileConfig} />);

    // TODO: update currRepTileConfig based on rules.. maybe in row logic, since just num rows iterations
    // }
  }

  return (
    <div>
      <h2>reptiles</h2>
      {rows}
    </div>
  );
};

export default RepTiles;
