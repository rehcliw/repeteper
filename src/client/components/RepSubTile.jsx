import React from 'react';

const RepSubTile = (props) => {
  const { id, on } = props;

  return (
    <div className={`repSubTile ${on}`} key={id} id={id}>
      f
    </div>
  );
};

export default RepSubTile;
