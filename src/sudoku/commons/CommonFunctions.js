import pull from 'lodash/pull';
/**
 * Check if a number given is in the specified row
 *
 * @param grid
 * @param row
 * @param num
 * @returns {boolean}
 * @constructor
 */
const IsNumInRow = (grid, row, num) => {
    if (grid[row].indexOf(num) === -1) {
        return false;
    }
    return true;
};

/**
 * Check if a number given is in the specified column
 * @param grid
 * @param col
 * @param num
 * @returns {boolean}
 * @constructor
 */
const IsNumInCol = (grid, col, num) => {
    for (let j = 0; j < grid.length; j += 1) {
        if (grid[j][col] === num) {
            return true;
        }
    }
    return false;
};

/**
 * Check if a number given is already in the box enclosing the specified cell
 *
 * @param grid
 * @param row
 * @param col
 * @param num
 * @returns {boolean}
 * @constructor
 */
const IsNumInBox = (grid, row, col, num) => {
    const boxLen = Math.sqrt(grid.length);
    const rowr = row - (row % boxLen);
    const colr = col - (col % boxLen);
    for (let c = 0, d = 0; c < boxLen && d < boxLen;) {
        if ((grid[rowr + c][colr + d]) === num) {
            return true;
        }
        if (c === (boxLen - 1) && d < boxLen - 1) {
            c = 0;
            d += 1;
        } else {
            c += 1;
        }
    }
    return false;
};

/**
 * Get the set of impossible candidates for an empty cell
 *
 * @param grid
 * @param row
 * @param col
 * @returns {Array}
 * @constructor
 */
const GetUnviableCandidates = (grid, row, col) => {
    const unviable = [];
    for (let i = 1; i <= grid.length; i += 1) {
        if (IsNumInRow(grid, row, i)) {
            unviable.push(i);
        } else if (IsNumInCol(grid, col, i)) {
            unviable.push(i);
        } else if (IsNumInBox(grid, row, col, i)) {
            unviable.push(i);
        }
    }
    return unviable;
};

/**
 * Get the set of possible numbers for an empty cell
 *
 * @param grid
 * @param row
 * @param col
 * @returns {Array}
 * @constructor
 */
const GetCandidates = (grid, row, col) => {
    const candidates = [];
    if (!grid[row][col]) {
        for (let i = 1; i <= grid.length; i += 1) {
            if (!IsNumInRow(grid, row, i) && !IsNumInCol(grid, col, i) && !IsNumInBox(grid, row, col, i)) {
                candidates.push(i);
            }
        }
    }
    return candidates.length ? candidates : grid[row][col];
};

const FillGridCandidates = (grid) => {
    grid.forEach((row, rIdx) => {
        row.forEach((col, cIdx) => {
            grid[rIdx][cIdx]= GetCandidates(grid, rIdx, cIdx );
        });
    });
    console.log(grid);
};



const EliminateFromCandidates = (grid, row, col) => {
    // do the row
    grid[row].forEach((c, cIdx) => {
        if (cIdx !== col && typeof grid[row][cIdx] === 'object') {
            pull(grid[row][cIdx], grid[row][col]);
            if(grid[row][cIdx].length === 1) {
                grid[row][cIdx] = grid[row][cIdx][0];
                EliminateFromCandidates(grid, row, cIdx);
            }
        }
    });
    // do the col
    for (let j = 0; j < grid.length; j += 1) {
        if (j !== row) {
            if (typeof grid[j][col] === 'object') {
                pull(grid[j][col], grid[row][col]);
                if(grid[j][col].length === 1) {
                    grid[j][col] = grid[j][col][0];
                    EliminateFromCandidates(grid, j, col);
                }
            }
        }
    }
    // Do the box
    const boxLen = Math.sqrt(grid.length);
    const rowr = row - (row % boxLen);
    const colr = col - (col % boxLen);
    for (let e = 0, d = 0; e < boxLen && d < boxLen;) {
        const r = rowr + e;
        const c = colr + d;
        if (r !== row && c !== col) {
            if (typeof grid[r][c] === 'object'){
                pull(grid[r][c],grid[row][col]);
                if(grid[r][c].length === 1) {
                    grid[r][c] = grid[r][c][0];
                    EliminateFromCandidates(grid, r, c);
                }
            }
        }
        if (e === (boxLen - 1) && d < boxLen - 1) {
            e = 0;
            d += 1;
        } else {
            e += 1;
        }
    }
};



/**
 * Check if grid has any empty cells
 *
 * @param grid
 * @returns {boolean}
 * @constructor
 */
const IsSolved = (grid) => {
    let complete = true;
    grid.forEach((r) => {
        if (r.indexOf(0) !== -1) {
            complete = false;
        }
    });
    return complete;
};

/**
 * Check if an array of numbers is a valid set of 1 to grid.length numbers
 *
 * @param set
 * @returns {boolean}
 * @constructor
 */
const IsValidSet = (set) => {
    for (let i = 1; i <= set.length; i += 1) {
        if (set.indexOf(i) === -1 || set.indexOf(i) !== set.lastIndexOf(i)) {
            return false;
        }
    }
    return true;
};

/**
 * Scan a grid for errors in row, column and finally each box
 *
 * @param grid
 * @returns {boolean}
 * @constructor
 */
const IsValidSolution = (grid) => {
    for (let r = 0; r < grid.length; r += 1) {
        if (!IsValidSet(grid[r])) {
            return false;
        }
    }

    for (let c = 0; c < grid.length; c += 1) {
        const col = [];
        for (let r = 0; r < grid.length; r += 1) {
            col.push(grid[r][c]);
        }
        if (!IsValidSet(col)) {
            return false;
        }
    }

    for (let i = 0; i < grid.length; i += Math.sqrt(grid.length)) {
        for (let j = 0; j < grid.length; j += Math.sqrt(grid.length)) {
            const box = [];
            for (let v = 0, u = 0; v < Math.sqrt(grid.length);) {
                box.push(grid[i + v][j + u]);
                u += 1;
                if (u === Math.sqrt(grid.length)) {
                    u = 0;
                    v += 1;
                }
            }
            if (!IsValidSet(box)) {
                return false;
            }
        }
    }
    return true;
};

/**
 * Print a grid row by row
 *
 * @param grid
 * @constructor
 */
const PrintGrid = (grid) => {
    console.log('[');
    grid.forEach((gRow) => {
        console.log(`[${gRow.join(',')}],`);
    });
    console.log(']');
};

/**
 * Generate a randomized array of the input array of numbers
 * @param nums
 * @returns {Array}
 */
const RandomiseArray = (nums) => {
    const n2 = [];
    nums.forEach((i) => { n2.push(i); });
    const rOrder = [];
    for (let j = n2.length - 1; j >= 0; j -= 1) {
    // get a number
        const rand = Math.floor(Math.random() * j);
        rOrder.push(n2[rand]);
        n2.splice(rand, 1);
    }
    return rOrder;
};

/**
 * Generate an empty grid of the given size (width)
 * @param size
 * @returns {Array}
 */
const EmptyGrid = (size) => {
    let arr = [];
    let a2 = [];
    a2.length = size;
    a2.fill(0, 0, size);
    for (let i = 0; i < size; i += 1) {
        arr[i] = a2.slice();
    }
    return arr;
};

/**
 * Generate an empty notes grid of the given size (width)
 * @param size
 * @returns {Array}
 */
const EmptyNotes = (size) => {
    let arr = [];
    let a2 = [];
    a2.length = size;
    a2.fill(0, 0, size);
    for (let i = 0; i < size; i += 1) {
        arr[i] = [];
        for (let j = 0; j < size; j += 1) {
            arr[i][j] = a2.slice();
        }
    }
    return arr;
};

/**
 * Rotates a grid through 90 degrees clockwise.
 * Cols become rows, ordered from bottom of the original
 * col to top becoming left to right in a row.
 *
 * Useful for determining locked candidates by row seeking,
 * and for generating new puzzles from an existing grid through
 * rotation.
 *
 * @param grid
 * @returns {Array}
 */
const RotateGridClockwise = (grid) => {
    const rotated = [];
    for (let c = 0; c < grid.length ; c += 1) {
        const colToRow = [];
        for (let r = grid.length - 1 ; r >=0; r -=1 ) {
            colToRow.push(grid[r][c]);
        }
        rotated.push(colToRow);
    }
    return rotated;
};


/*
 *
 * Checks if a cell has a fully locked value due to the value already being present
 * in nearby rows and columns on other blocks which would force this to be a locked
 * value
 *
 * @param grid
 * @param row
 * @param col
 * @return boolean
 */
const LockedBySiblings = (grid, row, col, value) => {
    const rotated = RotateGridClockwise(grid);
    const siblingRows = [0, 1, 2].filter((r) => { return r !== row % 3; });
    const siblingCols = [0, 1, 2].filter((c) => { return c !== col % 3; });
    return IsNumInRow(grid, (row - row % 3) + siblingRows[0], value ) &&
    IsNumInRow(grid, (row - row % 3) + siblingRows[1], value ) &&
    IsNumInRow(rotated, (col - col % 3) + siblingCols[0], value ) &&
    IsNumInRow(rotated, (col - col % 3) + siblingCols[0], value );
};

export {
    GetUnviableCandidates,
    EliminateFromCandidates,
    IsSolved,
    PrintGrid,
    IsNumInBox,
    IsNumInCol,
    IsNumInRow,
    GetCandidates,
    FillGridCandidates,
    IsValidSolution,
    RandomiseArray,
    EmptyGrid,
    EmptyNotes,
    RotateGridClockwise,
    LockedBySiblings,
};
