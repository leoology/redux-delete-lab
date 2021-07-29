import React, { Component } from 'react';

class Band extends Component {
  handleClick= () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.bandName} giu</li>
        <button onClick={this.handleClick}> Delete</button>
      </div>
    );
  }
};

export default Band;
