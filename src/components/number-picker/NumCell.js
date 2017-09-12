import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';

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

const NumCell = ({ value, onNumClick }) => {
  return (
    <div tabIndex={ value } className="NumCell" { ...s.NumCell }
         { ...(s.normal) }
         onClick={ () => { onNumClick(value) } }>
      { value }
    </div>
  );
}

NumCell.propTypes = {
  value: PropTypes.number,
  onNumClick: PropTypes.func,
};

export default NumCell;
