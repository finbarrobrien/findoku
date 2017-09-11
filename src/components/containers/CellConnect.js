import { connect } from 'react-redux';
import { clickCell, setCell } from '../../actions/actions';
import Cell from '../grid/Cell';

const mapStateToProps = (state) => {
  return {
    activeCell: state.selectedCell,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCellClick: (selected) => {
      dispatch(clickCell(selected));
    },
    onEnterNumber: (selected) => {
      console.log(selected)
      if (/^[1-9]{1}$/.test(selected.value)) {
        console.log('dispatch it');
        dispatch(setCell(selected));
      }
    },
  };
};

const CellSelect = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellSelect;
