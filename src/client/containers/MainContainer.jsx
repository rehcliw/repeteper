import React from 'react';
import SeedEditor from '../components/SeedEditor.jsx';

const MainContainer = () => {
  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>repeteper</h1>
        <SeedEditor />
      </div>
    </div>
  );
};

export default MainContainer;
