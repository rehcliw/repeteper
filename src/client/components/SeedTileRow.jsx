import React from 'react';
import SeedTile from './SeedTile.jsx';

const SeedTileRow = (props) => {
  const { id, dispatch, seedRow } = props;
  const tiles = [];
  for (let i = 0; i < seedRow.length; i++) {
    tiles.push(
      <SeedTile
        key={`r${id}-c${i}`}
        id={`r${id}-c${i}`}
        on={seedRow[i]}
        dispatch={dispatch}
        // seedTileState={seedRow[i]}
      />
    );
  }

  return (
    <div className='seedTileRow' key={id} id={id}>
      {/* <h3>a row</h3> */}
      {tiles}
    </div>
  );
};

export default SeedTileRow;
