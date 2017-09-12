import { connect } from 'react-redux';
import NumCell from '../number-picker/NumCell';
import { setCell } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNumClick: (value) => {
      console.log(value)
      if (/^[1-9]{1}$/.test(value)) {
        console.log('dispatch it');
        dispatch(setCell(value));
      }
    },
  };
};

const NumCellConnect = connect(null, mapDispatchToProps)(NumCell);

export default NumCellConnect;
