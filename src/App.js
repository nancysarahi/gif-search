// imports other js files where other parts of code is found
// such as GifList and SearchForm, css stylesheet as well

import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
  // Gifs is determined as en empty array to pulls the various gifs on the search
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
  }

// query will be passed in the literal as the user searches for something
// I am limiting the amount of gifs to 9
// fetching the giphy API with their beta key found on their documentation

searchGif = (query) => {
fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=09&apikey=dc6zaTOxFJmzC`)
  .then(response => response.json())
  .then(responseData => {
    this.setState({ gifs: responseData.data });
      })
    // include a catch in case the fetch does not work, it will display this message error
    .catch(error => {
      console.log('Error fetching data!', error);
    });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch API Test</h1>
            <SearchForm onSearch={this.searchGif}/>
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
