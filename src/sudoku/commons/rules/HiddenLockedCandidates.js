/**
 * Hidden locked candidates takes a grid with candidates already set
 * For each row, it determines candidates in the block of the current
 * row, and non-candidates in each sibling row of the same block.
 *
 * Non candidates are removed from the row candidates. Any candidates remaining
 * can only be in this row, of this block, so we remove the candidates from this
 * row of sibling blocks.
 *
 * This recursively calls itself if any candidates are removed in a single pass
 * as there could potentially be more candidates for removal. Also, if a cell in
 * a sibling block is found to have only a single remaining candidate, then the
 * value is set in the cell, and the rule to eliminate this value from candidates
 * in the aligning row, column and current block is invoked.
 *
 * @param grid
 */
import pullAll from 'lodash/pullAll';

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
                                // Value is set so we must ensure it's removed from candidates of the same row, col
                                // and current block.
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
