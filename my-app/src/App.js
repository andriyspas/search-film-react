import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Search} from './search/Search'
import {FilmList} from './film/FilmList'

class App extends Component {

  constructor (props){
    super(props)

    this.state = {
      search: '',
      films: []
    }
  }

  render() {
    return (
      <div className="App">
        <Search value={this.state.search} onChange={this.setSearch}/>
        <button onClick={this.fetchFilms}>Search</button>
        {
          this.state.films.length > 0 &&
            <FilmList films={this.state.films}/>
        }
      </div>
    );
  }

  setSearch = (e) => {
    this.setState({search:e.target.value});
  }

  fetchFilms = (e) => {
    fetch('http://localhost:8080/api/film/get/film/title/' + this.state.search, { method: 'GET' })
      .then(resp => resp.json())
      .then((res) => {
        console.log(res)
        this.setState({films: res});
      })
      .catch((err) => {
      })
  }
}

export default App;
