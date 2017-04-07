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
}

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
}

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
const GetInitialCandidates = (grid, row, col) => {
  const candidates = [];
  if (grid[row][col] !== 0) {
    return candidates;
  }
  for (let i = 1; i <= grid.length; i += 1) {
    if (!IsNumInRow(grid, row, i) && !IsNumInCol(grid, col, i) && !IsNumInBox(grid, row, col, i)) {
      candidates.push(i);
    }
  }
  return candidates;
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
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    const arr2 = [];
    for (let j = 0; j < size; j += 1) {
      arr2.push(0);
    }
    arr.push(arr2);
  }
  return arr;
}

/**
 * Generate an empty notes grid of the given size (width)
 * @param size
 * @returns {Array}
 */
const EmptyNotes = (size) => {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    const arr2 = [];
    for (let j = 0; j < size; j += 1) {
      const arr3 = [];
      for (let k = 0; k < size; k += 1){
        arr3.push[0];
      }
      arr2.push(arr3);
    }
    arr.push(arr2);
  }
  return arr;
}

export { GetUnviableCandidates, IsSolved, PrintGrid, IsNumInBox, IsNumInCol,
  IsNumInRow, GetInitialCandidates, IsValidSolution, RandomiseArray, EmptyGrid, EmptyNotes };
