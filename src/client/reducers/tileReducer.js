import * as actionTypes from '../constants/actionTypes';
import * as ruleTypes from '../constants/ruleTypes';

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
  rules: [ruleTypes.NADA],
};

const tileReducer = (state = initialState, action) => {
  let seedTiles;

  switch (action.type) {
    case actionTypes.FLIP_TILE:
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
