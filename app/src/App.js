import React, { Component } from 'react';
import './App.css';
import { Search } from './search/Search';
import { FilmList } from './film/FilmList';
import { ActorList } from './actor/ActorList';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            films: [],
            actors: []
        }
    }

    render() {
        return (
            <div className="App">
                <Search
                    value={ this.state.search }
                    onChange={ this.setSearch }
                />

                <button
                    className="btn btn-default"
                    onClick={ this.fetchFilms }
                >
                    Search
                </button>

                {
                    this.state.films.length > 0 &&
                    <FilmList
                        films={ this.state.films }
                    />
                }

                {
                    this.state.actors.length > 0 &&
                    <ActorList
                        actors={ this.state.actors }
                    />
                }
            </div>
        );
    }

    setSearch = (e) => {
        this.setState({search: e.target.value});
    };

    fetchFilms = (e) => {
        fetch('http://localhost:8080/api/film/get/film/title/' + this.state.search, {method: 'GET'})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({films: res});
            });

        fetch('http://localhost:8080/api/person/get/name/' + this.state.search, {method: 'GET'})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({actors: res});
            })
    }
}

export default App;
