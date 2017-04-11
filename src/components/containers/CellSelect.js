import { connect } from 'react-redux';
import { clickCell } from '../../actions/actions';
import Cell from '../grid/Cell';

const getSelectedCell = () => {

}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (row, col) => {
      dispatch(clickCell(row, col));
    },
  };
};

const CellSelect = connect()(Cell);

export default CellSelect;
