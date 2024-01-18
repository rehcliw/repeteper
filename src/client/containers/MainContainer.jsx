import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfigContainer from './ConfigContainer.jsx';
import RepTiles from '../components/RepTiles.jsx';

const MainContainer = () => {
  const tiles = useSelector((state) => state.tiles);
  // const dispatch = useDispatch();

  console.log('seedTiles:', tiles);

  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>repeteper</h1>
        <ConfigContainer />
        <RepTiles />
      </div>
    </div>
  );
};

export default MainContainer;
