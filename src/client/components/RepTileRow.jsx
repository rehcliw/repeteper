import React from 'react';
import RepTile from './RepTile.jsx';
import * as ruleTypes from '../constants/ruleTypes';

const RepTileRow = (props) => {
  const { seedConfig, id, rules } = props;

  // id is our row number. so

  const tiles = [];
  let currRepTileConfig = seedConfig.slice();
  // console.log('reversed', currRepTileConfig.reverse());

  // let transpose = (matrix) => {
  //   const m = matrix.slice();
  //   for (let i = 0; i < m.length; i++) {
  //     for (let j = i; j < m[0].length; j++) {
  //       let temp = m[i][j];
  //       m[i][j] = m[j][i];
  //       m[j][i] = temp;
  //     }
  //   }
  //   return m;
  // };

  let repTileIndex = id * seedConfig.length;
  let ruleIndex = repTileIndex % rules.length;
  for (let i = 0; i < seedConfig.length * 2; i++) {
    let copy = currRepTileConfig.slice();
    // TODO: update currRepTileConfig based on rules
    // console.log(rules[ruleIndex]);
    switch (rules[ruleIndex]) {
      case ruleTypes.INVERT:
        currRepTileConfig = currRepTileConfig.map((row) =>
          row.map((tile) => !tile)
        );
      case ruleTypes.MIRROR_X:
        currRepTileConfig = currRepTileConfig.map((row) => row.toReversed());
      case ruleTypes.MIRROR_Y:
        currRepTileConfig = currRepTileConfig.slice().reverse();
      // console.log('hi');
      case ruleTypes.TRANS:
        copy = currRepTileConfig.slice();
        for (let j = 0; j < copy.length; j++) {
          for (let k = j; k < copy[0].length; k++) {
            let temp = copy[j][k];
            copy[j][k] = copy[k][j];
            copy[k][j] = temp;
          }
        }
        currRepTileConfig = copy;
      case ruleTypes.ROT_CCW:
        copy = currRepTileConfig.slice();
        for (let j = 0; j < copy.length; j++) {
          for (let k = j; k < copy[0].length; k++) {
            let temp = copy[j][k];
            copy[j][k] = copy[k][j];
            copy[k][j] = temp;
          }
        }
        copy = copy.map((row) => row.toReversed());

        currRepTileConfig = copy;
      case ruleTypes.ROT_CW:
        copy = currRepTileConfig.slice();
        for (let j = 0; j < copy.length; j++) {
          for (let k = j; k < copy[0].length; k++) {
            let temp = copy[j][k];
            copy[j][k] = copy[k][j];
            copy[k][j] = temp;
          }
        }
        copy = copy.reverse();

        currRepTileConfig = copy;
      // currRepTileConfig = transpose(currRepTileConfig);
      // currRepTileConfig.reverse();
      default:
        1;
    }

    tiles.push(
      <RepTile
        key={`rt r${id}-c${i}`}
        id={`rt r${id}-c${i}`}
        tileConfig={currRepTileConfig}
      />
    );
    repTileIndex++;
    ruleIndex = repTileIndex % rules.length;
  }

  return (
    <div>
      {/* reptilerow */}
      {tiles}
    </div>
  );
};

export default RepTileRow;
