import React from 'react';
import { flipSeedTileActionCreator } from '../actions/actions';

const SeedTile = (props) => {
  const { id, on, dispatch } = props;
  return (
    <div
      className={`seedTile ${on}`}
      key={id}
      id={id}
      onClick={(e) => {
        // className = `seedTile ${!on}`;
        dispatch(flipSeedTileActionCreator(on, e));
      }}
    >
      f
    </div>
  );
};

export default SeedTile;
