import pullAll from 'lodash/pullAll';
import { EliminateFromCandidates, LockedBySiblings, FillGridCandidates, IsValidSolution } from '../commons/CommonFunctions';


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
    return grid; // return the grid once we can't lock any more values
};

const hiddenLockedCandidates = (grid) => {
    let lockedCount = 0;
    for (let row = 0; row<grid.length; row += 1) {
        for(let col = 0; col< grid.length; col+= 3) {
            let candidates = [];
            let dropCandidates = [];
            for(let b = 0; b < 3; b++) {
                if (typeof grid[row][b+col] === 'object') {
                    grid[row][b+col].forEach((v) => {
                        if (candidates.indexOf(v) === -1){
                            candidates.push(v);
                        }
                    });
                } else if (grid[row][b+col] > 0){
                    candidates.push(grid[row][b+col]);
                }
                const siblingRows = [0, 1, 2].filter((r) => { return r !== row % 3; });
                siblingRows.forEach((s) => {
                    let src = (row - row % 3 ) + s;
                    if (typeof grid[src][b+col] === 'object') {
                        grid[src][b+col].forEach((v) => {
                            if (dropCandidates.indexOf(v) === -1){
                                dropCandidates.push(v);
                            }
                        });
                    } else if (grid[src][b+col] > 0){
                        dropCandidates.push(grid[src][b+col]);
                    }
                });
            }
            // List of all values on this row for this block
            // Remove values which are in other cells in this block
            // subtract dropCandidates from candidates
            pullAll(candidates, dropCandidates);
            // if any remain, these can't be placed in the same row of another block, so
            // we remove them from the candidates in other blocks.
            if (candidates.length) {
                const siblingBlocks = [0,1,2].filter((c) => { return (c !== (col - (col % 3)) / 3); });
                siblingBlocks.forEach((block) => {
                    for(let b = 0; b < 3; b += 1) {
                        let s = (3 * block) + b;
                        if(typeof grid[row][s] === 'object') {
                            lockedCount += 1;
                            pullAll(grid[row][s], candidates);
                            console.log(grid[row][s]);
                            if(grid[row][s].length === 1) {
                                grid[row][s] = grid[row][s][0];
                                EliminateFromCandidates(grid, row, s);
                            }
                        }
                    }
                });
            }
        }
    }
    // If we managed to reduce candidates in the grid, we may be able to do it again on another pass
    if(lockedCount != 0){
        hiddenLockedCandidates(grid);
    }
};

const LockedValuesSolver = (grid) => {
    if (grid) {
        FillGridCandidates(grid);
        hiddenLockedCandidates(grid);
        console.log(grid);
        console.log(IsValidSolution(grid));
    }
    return null;
};

export default LockedValuesSolver;
export { lockValues };
