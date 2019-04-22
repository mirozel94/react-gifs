import React, { Component } from 'react';
import Gif from './gif.jsx';


class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        <Gif id={this.props.ids[0]} />
        <Gif id={this.props.ids[1]} />
        <Gif id={this.props.ids[0]} />
        <Gif id={this.props.ids[1]} />
        <Gif id={this.props.ids[0]} />
        <Gif id={this.props.ids[1]} />
      </div>
    );
  }
}

export default GifList;
