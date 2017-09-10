import { connect } from 'react-redux';
import { clickCell } from '../../actions/actions';
import Cell from '../grid/Cell';

const mapStateToProps = (state) => {
  return {
    activeCell: state.selectedCell,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCellClick: (selected) => {
      console.log(selected);
      dispatch(clickCell(selected));
    },
  };
};

const CellSelect = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellSelect;
