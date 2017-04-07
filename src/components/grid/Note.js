import React, {Component} from 'react';
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
    rowNum: React.PropTypes.number.isRequired,
    colNum: React.PropTypes.number.isRequired,
    notes: React.PropTypes.arrayOf(React.PropTypes.number),
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
    const cellNotes = _noteValues();
    return (
      <div className="Note" { ...s.cell }>
        { cellNotes }
      </div>
    );
  }
}
