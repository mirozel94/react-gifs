import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.jsx';
import GifResult from './components/gif_result.jsx';
import GifList from './components/gif_list.jsx';

import '../assets/stylesheets/application.scss';

class Hello extends Component {
  constructor(props) {
    super(props);
  }
  // const gifIds = [];
  render () {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar/>
          <GifResult/>
        </div>
        <div className='right-scene'>
          <GifList/>
        </div>
      </div>
    );
  }
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello/>, root);
}
