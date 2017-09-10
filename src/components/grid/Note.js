import React, {Component} from 'react';
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

export default class Note extends Component {

  static propTypes = {
    rowNum: PropTypes.number.isRequired,
    colNum: PropTypes.number.isRequired,
    notes: PropTypes.arrayOf(PropTypes.number),
  }


  constructor(props) {
    super(props);
    this.state = {};
  }


  _noteValues() {
    if (this.props.notes.length) {
      const notes = [];
      this.props.notes.forEach((v) => {
        notes.push(<div
          { ...s.note }
          key={ v }>{ v }</div>);
      });
      return notes;
    }
  }


  render() {
    const cellNotes = this._noteValues();
    return (
      <div className="Note" { ...s.cell }>
        { cellNotes }
      </div>
    );
  }
}
