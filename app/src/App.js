import React, { Component } from 'react';
import './App.css';
import { Search } from './search/Search';
import { Filter } from './filter/Filter';
import { FilmList } from './film/FilmList';
import { ActorList } from './actor/ActorList';

class App extends Component {

    constructor() {
        super();

        this.state = {
            search: '',
            films: [],
            actors: [],
            filter: ''
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
                    onClick={ this.fetchData }
                >
                    Search
                </button>

                <Filter
                    filter={this.state.filter}
                />

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

    fetchData = () => {
        switch (this.props.filter) {
            case 'film':
                this.fetchFilms();
                break;

            case 'actor':
                this.fetchActors();
                break;
        }
    };

    fetchFilms = () => {
        fetch('http://localhost:8080/api/film/get/film/title/' + this.state.search, {method: 'GET'})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({films: res});
            });
    };

    fetchActors = () => {
        fetch('http://localhost:8080/api/person/get/name/' + this.state.search, {method: 'GET'})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({actors: res});
            })
    };
}

export default App;
