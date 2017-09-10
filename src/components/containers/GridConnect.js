import { connect } from 'react-redux';
import Grid from '../grid/Grid';

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
    notes: state.notes,
    selected: state.selectedCell,
  };
};

const GridConnect = connect(mapStateToProps)(Grid);

export default GridConnect;
