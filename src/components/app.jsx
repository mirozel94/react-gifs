import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import GifResult from './gif_result.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: ['3o6ZtpRoYe9wbyfcBi', '5mlXCTjRtf9N6'],
      selectedGif: '3o6ZtpRoYe9wbyfcBi'
    }
  }

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar/>
          <GifResult id={this.state.selectedGif}/>
        </div>
        <div className='right-scene'>
          <GifList ids={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

