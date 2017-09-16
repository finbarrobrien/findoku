import { GetInitialCandidates, LockedBySiblings, RotateGridClockwise, IsSolved, PrintGrid } from '../commons/CommonFunctions';


const lockValues = (grid) => {
  let lockedCount = 0;
  for (let r = 0, c = 0; r < grid.length && c < grid.length;) { // scan the entire grid.
    const nextC = (c + 1) % grid.length;
    const nextR = (nextC === 0) ? r + 1 : r;
    const candidates = GetInitialCandidates(grid, r, c);
    if (candidates.length) {
      if(candidates.length === 1){
        grid[r][c] = candidates[0];
        lockedCount += 1;
      } else {
        for (let v = 0; v < candidates.length; v += 1) {
          if (LockedBySiblings(grid, r, c, candidates[v])) {
            grid[r][c] = candidates[v];
            lockedCount += 1;
            break; // break to next row, col.
          }
        }
      }
    }
    r = nextR; c = nextC;
  }
  // if we locked values in this pass, we should try again.
  // the grid may be solved by now but we recurse and try again
  if(lockedCount != 0){
    lockValues(grid)
  }
  // Recursion will have finished (the grid may or may not be solved)
  return grid; // return the grid once we can't lock any more values
};

const LockedValuesSolver = (grid) => {
  if (grid) {

    if (lockValues(grid)) {
      PrintGrid(grid);
      console.log(IsSolved(grid));
      return true;
    }
  }
  return null;
};

export default LockedValuesSolver;
