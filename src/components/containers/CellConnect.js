import { connect } from 'react-redux';
import { clickCell } from '../../actions/actions';
import Cell from '../grid/Cell';

const mapStateToProps = (state, ownProps) => {
  return {
    highlight: state.selectedCell.row === ownProps.rowNum && state.selectedCell.col === ownProps.colNum
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCellClick: () => {
      dispatch(clickCell(ownProps.rowNum, ownProps.colNum));
    },
  };
};

const CellSelect = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellSelect;
