import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
  }

searchGif = (query) => {
fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=09&apikey=dc6zaTOxFJmzC`)
  .then(response => response.json())
  .then(responseData => {
    this.setState({ gifs: responseData.data });
      })
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
