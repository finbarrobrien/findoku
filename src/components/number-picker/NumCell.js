import React, {Component} from 'react';
import {css} from 'glamor';

const s = {
  NumCell: css({
    flex: '0 0 auto',
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    width: '45px',
    height: '45px',
    fontSize: '24px',
    lineHeight: '45px',
    textAlign: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
  }),
};

export default class NumCell extends Component {

  static propTypes = {
    value: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this._onClick = this._onClick.bind(this);
  }


  _onClick(){
    console.log(`Clicked number ${this.props.value}`);
  }


  render() {
    return (
      <div className="NumCell" { ...s.NumCell } onClick={ this._onClick }>
        { this.props.value }
      </div>
    );
  }
}