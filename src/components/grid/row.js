import React, {Component} from 'react';
import {css} from 'glamor';
import Cell from './cell';
import Note from './note';

const s = {
  row: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 0.5)'
  }),
};

export default class Row extends Component {

  static propTypes = {
    size: React.PropTypes.number,
    rowNum: React.PropTypes.number,
    values: React.PropTypes.arrayOf(React.PropTypes.number),
    notes: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)),
  }


  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const cells = [];
    for (let i = 0; i < this.props.size; i += 1) {
      console.log('add cell');
      if (!this.props.values[i] && this.props.notes[i].length) {
        cells.push(<Note
          rowNum={ this.props.rowNum }
          colNum={ i }
          key={ `Note ${this.props.rowNum}, ${i}` }
          notes={ this.props.notes[i] }/>);
      } else {
        cells.push(<Cell
          rowNum={ this.props.rowNum }
          colNum={ i }
          key={ `Cell ${this.props.rowNum}, ${i}` }
          value={ this.props.values[i] }/>);
      }
    }
    return (
      <div className="Row" { ...s.row }>
        { cells }
      </div>
    );
  }
}
