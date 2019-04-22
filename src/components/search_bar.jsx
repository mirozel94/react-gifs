import React, { Component } from 'react';

class SearchBar extends Component {
  handleKeyUp = (event) => {
    console.log(event.target.value);
  }
  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleKeyUp} />
    );
  }
}

export default SearchBar;
