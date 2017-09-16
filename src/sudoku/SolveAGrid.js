import LockedValuesSolver from './solver/LockedValuesSolver';

const grid = [[4, 7, 5, 8, 6, 3, 1, 2, 9],
  [6, 1, 2, 5, 4, 9, 0, 0, 0],
  [3, 8, 9, 2, 1, 7, 5, 4, 6],
  [1, 6, 4, 7, 5, 2, 8, 9, 0],
  [8, 2, 3, 4, 9, 1, 6, 5, 7],
  [5, 9, 7, 3, 8, 6, 2, 1, 4],
  [7, 4, 6, 1, 3, 5, 9, 0, 2],
  [2, 3, 1, 9, 7, 8, 4, 6, 5],
  [9, 5, 8, 6, 2, 4, 3, 7, 1]];

const solved = LockedValuesSolver(grid);

export default solved;

