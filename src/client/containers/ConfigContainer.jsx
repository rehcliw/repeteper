import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SeedEditor from '../components/SeedEditor.jsx';

const ConfigContainer = () => {
  const tiles = useSelector((state) => state.tiles);
  const dispatch = useDispatch();

  return (
    <div>
      <SeedEditor dispatch={dispatch} seedTiles={tiles.seedTiles} />
    </div>
  );
};

export default ConfigContainer;
