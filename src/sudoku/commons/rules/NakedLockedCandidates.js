import { LockedBySiblings, EliminateFromCandidates } from '../CommonFunctions';


/**
 *
 * @param grid
 * @returns {*}
 */
const lockValues = (grid) => {
    let lockedCount = 0;
    for (let r = 0, c = 0; r < grid.length && c < grid.length;) { // scan the entire grid.
        const nextC = (c + 1) % grid.length;
        const nextR = (nextC === 0) ? r + 1 : r;
        if (typeof grid[r][c] === 'object') {
            if (grid[r][c].length) {
                if (grid[r][c].length === 1) {
                    grid[r][c] = grid[r][c][0];
                    lockedCount += 1;
                    EliminateFromCandidates(grid, r, c);
                } else {
                    for (let v = 0; v < grid[r][c].length; v += 1) {
                        if (LockedBySiblings(grid, r, c, grid[r][c][v])) {
                            grid[r][c] = grid[r][c][v];
                            lockedCount += 1;
                            EliminateFromCandidates(grid, r, c);
                            break; // break to next row, col.
                        }
                    }
                }
            }
        }
        r = nextR; c = nextC;
    }
    // if we locked values in this pass, we should try again.
    // the grid may be solved by now but we recurse and try again
    if(lockedCount != 0){
        lockValues(grid);
    }
    // Recursion will have finished (the grid may or may not be solved)
};
