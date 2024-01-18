import * as types from '../constants/actionTypes';

export const flipSeedTileActionCreator = (tileState, e) => ({
  type: types.FLIP_TILE,
  payload: { tileState, e },
});
