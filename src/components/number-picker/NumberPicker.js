import React, {Component} from 'react';
import {css} from 'glamor';
import NumRow from './NumRow';

const s = {
  numPicker: css({
    margin: '70px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  }),
};

export default class NumberPicker extends Component {

  static propTypes = {
    gridSize: React.PropTypes.number.isRequired,
    rowSize: React.PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }


  _getRows() {
    const rows = [];
    for (let i = 1; i <= this.props.gridSize;){ // for each row
      const values = [];
      for (let j = 0; j < this.props.rowSize; j += 1 ){ // 1, 2, 3
        values.push( i + j)
      }
      rows.push(<NumRow key={ `Row ${i + 1}`  } values={ values }/>);
      i += this.props.rowSize;
    }
    return rows;
  }


  _mouseOver(){
    // Change the cursor
  }

  render() {
    const rows = this._getRows();

    return (
      <div className="NumPicker" { ...s.numPicker } onMouseOver={ this._mouseOver }>
        { rows }
      </div>
    );
  }

}
