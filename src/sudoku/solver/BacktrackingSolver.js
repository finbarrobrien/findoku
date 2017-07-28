import { GetInitialCandidates, IsValidSolution, RandomiseArray } from '../commons/CommonFunctions';

/**
 * For the given grid position, try to generate a valid grid.
 * This will get the complete list of possible numbers for the
 * next empty (0) position. For each possible number, set the number
 * in this current position, check if the number was placed in the
 * very last grid position, if so, we are finished, otherwise, recurse
 * into this function again for the next grid position.
 *
 * @param grid
 * @param row
 * @param col
 * @returns {boolean}
 */
const backtrack = (grid, row, col) => {
  for (let r = row, c = col; r < grid.length && c < grid.length;) {
    if (grid[r][c] === 0) { // only try to solve a number if it is not already set
      const nums = RandomiseArray(GetInitialCandidates(grid, r, c));
      if (!nums.length) {
        return false;
      }
      for (let n = 0; n < nums.length; n += 1) {
        grid[r][c] = nums[n]; // place the number we're trying to solve for
        const nextC = (c + 1) % grid.length;
        const nextR = (nextC === 0) ? r + 1 : r;
        if (nextR === grid.length) { // end of the grid!! :D
          r = nextR;
          c = nextC;
          return true;
        }
        if (!backtrack(grid, nextR, nextC)) {
          if (nums.length === n + 1) {
            grid[r][c] = 0;
            return false; // we failed to place a number here
          }
        } else { // grid was solved from here
          return true;
        }
      }
    }
    // When c is 9, reset c and increment r
    c = (c + 1) % grid.length;
    if (c === 0) {
      r += 1;
    }
  }

  return IsValidSolution(grid); // End of grid
};


const BacktrackingSolver = (grid) => {
  if (grid) {
    if (backtrack(grid, 0, 0)) {
      return grid;
    }
  }
  return null;
};

export default BacktrackingSolver;
export { backtrack };
