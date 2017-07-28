import { GetInitialCandidatesGrid, IsSolved, PrintGrid } from '../commons/CommonFunctions';


const lockedCandidates = (grid, candidates) => {


};

const LockedCandidatesSolver = (grid) => {
  if (grid) {
    const candidates = GetInitialCandidatesGrid(grid);
    //if (lockedCandidates(grid, candidates)) {
      PrintGrid(grid);
      return true;
    //}
  }
  return null;
};


const isCandidateInRowOfAlignedBox = (grid, number, row, ) => {

};

const isCandidateInColOfAlignedBox = (grid, number, col) => {

};

export default LockedCandidatesSolver;
export { lockedCandidates };
