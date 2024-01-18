import * as types from '../constants/actionTypes';

export const flipSeedTileActionCreator = (tileState, e) => ({
  type: types.FLIP_TILE,
  payload: { tileState, e },
});

export const addRuleActionCreator = (ruleType) => ({
  type: types.ADD_RULE,
  payload: ruleType,
});

export const deleteRuleActionCreator = () => ({
  type: types.DELETE_RULE,
  payload: null,
});