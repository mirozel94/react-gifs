import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifResult extends Component {
  render() {
    return (
      <div className="selected-gif">
        <Gif id={this.props.id} />
      </div>
    );
  }
}

export default GifResult;
