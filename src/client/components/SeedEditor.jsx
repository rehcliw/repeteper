import React from 'react';
import SeedTileRow from './SeedTileRow.jsx';

const SeedEditor = (props) => {
  // loop to create array of seed tile rows
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<SeedTileRow />);
  }

  return (
    <div>
      <h2>seed editor</h2>
      {rows}
    </div>
  );
};

export default SeedEditor;
