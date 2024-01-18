import React from 'react';
import RepTile from './RepTile.jsx';

const RepTileRow = (props) => {
  const { rowConfig, id } = props;

  console.log(rowConfig);

  const tiles = [];
  let currRepTileConfig = rowConfig;
  for (let i = 0; i < rowConfig.length; i++) {
    tiles.push(
      <RepTile
        key={`rt r${id}-c${i}`}
        id={`rt r${id}-c${i}`}
        tileConfig={currRepTileConfig}
      />
    );
    // TODO: update currRepTileConfig based on rules
  }

  return (
    <div>
      {/* reptilerow */}
      {tiles}
    </div>
  );
};

export default RepTileRow;
