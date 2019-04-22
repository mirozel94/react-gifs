import React, { Component } from 'react';

class Gif extends Component {
  render() {
    let src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div className="gif">
        <img src= {src} alt="" />
      </div>
    );
  }
}

export default Gif;
