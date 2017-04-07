import { GetInitialCandidates, IsSolved, PrintGrid } from './commons/CommonFunctions';

/**
 * Solve a grid by checking any empty square, and seeing if a single number can be definitively placed there,
 * repeat until the grid is unsolvable, or is solved
 *
 * @param grid
 */
const singleSolution = (grid) => {
  let stillSolveable = true;
  while (stillSolveable && !IsSolved(grid)) {
    let addedNumber = false;
    for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid.length; c += 1) {
        if (grid[r][c] === 0) {
          const candidates = GetInitialCandidates(grid, r, c);
          if (candidates.length && candidates.length === 1) {
            console.log(`Place ${candidates[0]} into grid[${r}][${c}]`);
            grid[r][c] = candidates[0];
            addedNumber = true;
          }
        }
      }
    }
    // if a number is added this iteration, then the puzzle is still potentially solveable
    stillSolveable = addedNumber;
  }
  if (IsSolved(grid)) {
    return true;
  }
  return false;
};

const SingleSolutionSolver = (grid) => {
  if (grid) {
    if (singleSolution(grid)) {
      PrintGrid(grid);
      return true;
    }
  }
  return null;
};

export default SingleSolutionSolver;
export { singleSolution };
