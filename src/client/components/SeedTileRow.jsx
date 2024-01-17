import React from 'react';
import SeedTile from './SeedTile.jsx';

const SeedTileRow = (props) => {
  const { rid } = props;
  const tiles = [];
  for (let i = 0; i < 5; i++) {
    tiles.push(<SeedTile key={`seed-tile-${i}`} id={`seed-tile-${i}`} />);
  }

  return (
    <div className='seedTileRow'>
      {/* <h3>a row</h3> */}
      {tiles}
    </div>
  );
};

export default SeedTileRow;
