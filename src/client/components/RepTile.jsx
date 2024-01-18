import React from 'react';
import RepSubTileRow from './RepSubTileRow.jsx';

const RepTile = (props) => {
  const { tileConfig } = props;

  const rows = [];
  for (let i = 0; i < tileConfig.length; i++) {
    rows.push(<RepSubTileRow id={i} key={i} subRow={tileConfig[i]} />);
  }

  return <div className='repTile'>{rows}</div>;
};

export default RepTile;
