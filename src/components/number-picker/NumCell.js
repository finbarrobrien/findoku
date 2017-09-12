import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import { connect } from 'react-redux';
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

const s = {
  NumCell: css({
    flex: '0 0 auto',
    width: '45px',
    height: '45px',
    fontSize: '24px',
    lineHeight: '45px',
    textAlign: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
  }),
  highlight: css({
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(255, 0, 0, 1.0)',
  }),
  normal: css({
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 1.0)',
  }),
};

const _NumCell = ({ value, onNumClick }) => {
  return (
    <div tabIndex={ value } className="NumCell" { ...s.NumCell }
         { ...(s.normal) }
         onClick={ () => { onNumClick(value) } }>
      { value }
    </div>
  );
}

_NumCell.propTypes = {
  value: PropTypes.number,
  onNumClick: PropTypes.func,
};

const NumCell = connect(null, mapDispatchToProps)(_NumCell);

export default NumCell;
