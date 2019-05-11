import React, { Component } from 'react';

class SearchBar extends Component {
  handleKeyUp = (event) => {
    const apiKey = "BuTBFM6393R9Jmhq6HQR44x3VdL9N8OB";
    const url = "http://api.giphy.com/v1/gifs/search&q=" + event.target.value + "&api_key=" + apiKey;

    fetch(url)
      .then((response) => {
       return response.json();
       console.log('ok');
      })

    };
  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleKeyUp} />
    );
  }
}

export default SearchBar;
