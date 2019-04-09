import { GetCandidates, IsValidSolution, RandomiseArray } from '../commons/CommonFunctions';

/**
 * Brute force attempt to place a number, recurse and continue until
 * the grid is either solved, or we cannot recurse any more and solvin
 * is failed.
 *
 * @param grid
 * @param row
 * @param col
 * @returns {boolean}
 */
const backtrack = (grid, row, col) => {
    for (let r = row, c = col; r < grid.length && c < grid.length;) {
        if (!grid[r][c]) { // only try to solve a number if it is not already set
            const nums = RandomiseArray(GetCandidates(grid, r, c));
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
