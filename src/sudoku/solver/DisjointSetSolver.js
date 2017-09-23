import pullAll from 'lodash/pullAll';
import { FillGridCandidates, EliminateFromCandidates } from '../commons/CommonFunctions';

/**
 * All entries in the right array are contained in the left array
 *
 * @param left
 * @param right
 */
const containsAll = (left, right) => {
  let contains = true;
  //right.forEach((r) => {
  for(let i = 0; i < right.length; i += 1) {
    if(left.indexOf(right[i]) === -1){
      contains = false;
      break;
    }
  }
  return contains;
};

/**
 * Get the row, col indexes of all candidates in a given row
 *
 * @param candidates
 * @param row
 */
const getCandidatesRow = (candidates, row) => { //
  return candidates[row].map((c, idx) => {
    return [row, idx];
  });
};

/**
 * Get the row, col indexes of all candidates in a given col
 * @param candidates
 * @param col
 */
const getCandidatesCol = (candidates, col) => {
  return candidates.map((r, idx) => {
    return [idx, col];
  });
};

/**
 * Get the row, col indexes of all candidates in a given box
 * @param candidates
 * @param row
 * @param col
 * @returns {Array}
 */
const getCandidatesBox = (candidates, row, col) => {
  const boxLen = Math.sqrt(candidates.length);
  const rowr = row - (row % boxLen);
  const colr = col - (col % boxLen);
  const box = [];
  for (let c = 0, d = 0; c < boxLen && d < boxLen;) {
    if(typeof candidates[rowr+c][colr+d] === 'object') {
      box.push([rowr+c, colr+d]);
    }
    if (c === (boxLen - 1) && d < boxLen - 1) {
      c = 0;
      d += 1;
    } else {
      c += 1;
    }
  }
  return box;
};

const reduceToDisjointSets = (candidates) => {
  for (let r = 0, c = 0; r < candidates.length && c < candidates.length;) {
    const nextC = (c + 1) % candidates.length; // next column to check
    const nextR = (nextC === 0) ? r + 1 : r; // next row to check
    if(typeof candidates[r][c] === 'object') { // array of candidates so value is not fixed
      const djSetSearch = [getCandidatesBox(candidates, r, c), getCandidatesCol(candidates, c), getCandidatesRow(candidates, r)];
      djSetSearch.forEach((cells) => {
        let subsets = {
          yes: [],
          no: []
        };
        cells.forEach((cell) => {
          if ((cell[0] !== r || cell[1] !== c) && typeof candidates[cell[0]][cell[1]] === 'object') {
            let ctns = containsAll(candidates[r][c], candidates[cell[0]][cell[1]]);
            if (ctns) {
              subsets.yes.push([cell[0], cell[1]]);
            } else {
              subsets.no.push([cell[0], cell[1]]);
            }
          }
        });
        if (subsets.yes.length === candidates[r][c].length-1) {
          // we have a disjoint set of values, eliminate these values in the subsets.no cells
          subsets.no.forEach((cell) => {
            pullAll(candidates[cell[0]][cell[1]], candidates[r][c]);
            // reduced the number of candidates in a cell using 'logic'
            if (candidates[cell[0]][cell[1]].length === 1){
              // eliminated all candidates for this cell bar one, so set it in place.
              candidates[cell[0]][cell[1]] = candidates[cell[0]][cell[1]][0];
              // any time we fix a cell, we need to go back and eliminate it from other row, col, box cells
              // where it is a candidate.
              EliminateFromCandidates(candidates, cell[0], cell[1]);
            }
          });
        }
      });
    }
    r = nextR; c = nextC;
  }
}

const DisjointSetSolver = (grid) => {
  FillGridCandidates(grid)
  reduceToDisjointSets(grid);
  console.log(grid);
  return grid;
}


export default DisjointSetSolver;
export { reduceToDisjointSets };
