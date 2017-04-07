import React, {Component} from 'react';
import {css} from 'glamor';
import Row from './row';

const s = {
  grid: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  }),
};

export default class Grid extends Component {

  static propTypes = {
    size: React.PropTypes.number,
    grid: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)),
    notes: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number))),
  }
  /*
   defaultProps() {
   size: 9
   };*/


  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.props.size; i += 1) {
      rows.push(<Row
        size={ this.props.size }
        rowNum={ i }
        key={ i }
        values={ this.props.grid[i] }
        notes={ this.props.notes[i] }/>);
    }
    return (
      <div className="Grid" { ...s.grid } >
        { rows }
      </div>
    );
  }

}
