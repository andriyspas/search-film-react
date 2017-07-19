import React, { Component } from 'react';
import './App.css';
import { Search } from './components/search/Search';
import { Filter } from './components/filter/Filter';
import FilmList from './components/film/FilmList';
import ActorList from './components/actor/ActorList';
import { SwipeList } from './components/swiper/SwipeList';
import { Grid } from  'react-bootstrap';

class App extends Component {

    constructor() {
        super();

        this.state = {
            search: '',
            films: [],
            actors: [],
            popularFilms: [],
            filter: 'film'
        };

        this.fetchPopularFilms()
    }

    setFilter = (value) => {
        this.setState({filter: value});
    };

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
                    onChange={ this.setFilter }
                />

                <Grid>
                    {
                        (!this.state.films.length && !this.state.actors.length) > 0 && this.state.popularFilms.length > 0 &&
                        <SwipeList films={ this.state.popularFilms }/>
                    }

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
                </Grid>
            </div>
        );
    }

    setSearch = (e) => {
        this.setState({search: e.target.value});
    };

    fetchPopularFilms = () => {
        fetch('http://localhost:8080/api/film/get/popular', {method: 'GET'})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({popularFilms: res});
            });
    };

    fetchData = () => {
        switch (this.state.filter) {
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
                this.setState({films: res, actors: []});
            });
    };

    fetchActors = () => {
        fetch('http://localhost:8080/api/person/get/name/' + this.state.search, {method: 'GET'})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({actors: res, films: []});
            })
    };
}

export default App;
