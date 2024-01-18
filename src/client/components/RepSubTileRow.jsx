import React from 'react';
import RepSubTile from './RepSubTile.jsx';

const RepSubTileRow = (props) => {
  const { subRow, id } = props;

  const tiles = [];
  for (let i = 0; i < subRow.length; i++) {
    tiles.push(
      <RepSubTile
        key={`rst r${id}-c${i}`}
        id={`rst r${id}-c${i}`}
        on={subRow[i]}
      />
    );
  }

  return (
    <div>
      {/* repsubtilerow */}
      {tiles}
    </div>
  );
};

export default RepSubTileRow;
