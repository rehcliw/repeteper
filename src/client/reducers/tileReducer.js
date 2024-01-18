import * as types from '../constants/actionTypes';

const tiles = [];
for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    row.push(Math.random() < 0.5);
  }
  tiles.push(row);
}

const initialState = {
  seedTiles: tiles,
};

const tileReducer = (state = initialState, action) => {
  let seedTiles;

  switch (action.type) {
    case types.FLIP_TILE:
      const tileId = action.payload.e.target.id;
      console.log(tileId);
      // state.seedTiles[tileId[1]][tileId[4]] = action.payload.tileState;

      seedTiles = state.seedTiles.slice();
      seedTiles[tileId[1]][tileId[4]] = !action.payload.tileState;

      return {
        ...state,
        seedTiles,
      };
    default: {
      return state;
    }
  }
};

export default tileReducer;
