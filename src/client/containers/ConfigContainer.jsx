import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SeedEditor from '../components/SeedEditor.jsx';
import RuleEditor from '../components/RuleEditor.jsx';

const ConfigContainer = () => {
  const tiles = useSelector((state) => state.tiles);
  const dispatch = useDispatch();

  return (
    <div className='innerbox'>
      <SeedEditor dispatch={dispatch} seedTiles={tiles.seedTiles} />
      <RuleEditor dispatch={dispatch} seedTiles={tiles.rules} />
    </div>
  );
};

export default ConfigContainer;
