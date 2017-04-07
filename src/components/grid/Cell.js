import React, {Component} from 'react';
import {css} from 'glamor';

const s = {
  cell: css({
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

export default class Cell extends Component {

  static propTypes = {
    rowNum: React.PropTypes.number.isRequired,
    colNum: React.PropTypes.number.isRequired,
    value: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
    };
    this._onClick = this._onClick.bind(this);
  }


  _onClick() {
    this.setState({ highlight: !this.state.highlight });
  }


  render() {
    return (
      <div className="Cell" { ...s.cell }
           { ...(this.state.highlight ? s.highlight : s.normal ) }
           onClick={ this._onClick }>
        { this.props.value }
      </div>
    );
  }
}
