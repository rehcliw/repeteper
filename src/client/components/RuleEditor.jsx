import React from 'react';
import {
  addRuleActionCreator,
  deleteRuleActionCreator,
} from '../actions/actions';
import * as ruleTypes from '../constants/ruleTypes';
import { DELETE_RULE } from '../constants/actionTypes';

const RuleEditor = (props) => {
  const { dispatch, rules } = props;
  const buttons = [];

  console.log({ ruleTypes });

  for (let ruleType in ruleTypes) {
    buttons.push(
      <button
        onClick={() => {
          dispatch(addRuleActionCreator(ruleType));
        }}
      >
        {ruleType}
      </button>
    );
  }

  let ruleList = '';
  rules.forEach((rule) => {
    ruleList += `${rule}, `;
  });

  return (
    <div className='ruleEditor'>
      <h2>rule editor</h2>
      <div>
        {buttons}
        <button
          onClick={() => {
            dispatch(deleteRuleActionCreator());
          }}
        >
          DELETE
        </button>
      </div>
      <p>{ruleList}</p>
    </div>
  );
};

export default RuleEditor;
