import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';

const s = {
  cell: css({
    display: 'flex',
    flexFlow: 'row wrap',
    width: '45px',
    height: '45px',
  }),
  note: css({
    flex: '0 0 auto',
    width: '15px',
    height: '15px',
    fontSize: '9px',
    lineHeight: '15px',
    textAlign: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
  })
};

const Note = ({ row, col, notes }) => {
  return (
    <div className="Note" { ...s.cell }>
      { notes.map((note) => <div { ...s.note } key={ `note-${note}` }>{ note }</div> ) }
    </div>
  );
};

Note.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  notes: PropTypes.arrayOf(PropTypes.number),
};

export default Note;
