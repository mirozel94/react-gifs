import React, { Component } from 'react';

class SearchBar extends Component {
  handleKeyUp = (event) => {
    fetch(`http://api.giphy.com/v1/gifs/search&q=${event.target.value}&api_key=BuTBFM6393R9Jmhq6HQR44x3VdL9N8OB`)
    .then(results => {
      console.log(results);
    });
  }
  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleKeyUp} />
    );
  }
}

export default SearchBar;
