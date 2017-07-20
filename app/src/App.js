import React, {Component} from 'react';
import './index.css';
import { FilmList, ActorList, Search, Filter, Header, Footer } from './components';
import { SwipeList } from './components/swiper/SwipeList';
import { Grid, Button, Row, Col } from  'react-bootstrap';

class App extends Component {

    constructor() {
        super();

        this.state = {
            search: '',
            searchRange: '',
            films: [],
            actors: [],
            popularFilms: [],
            filter: 'film',
            rangeClass: 'range'
        };

        this.fetchPopularFilms()
    }

    setFilter = (value) => {
        this.setState({filter: value});
    };

    render() {
        return (
            <div className="App">
                <Header/>

                <Grid fluid className="search">
                    <Row>
                        <Col xs={12}>
                            <h2>Lorem ipsum</h2>
                            <h2>is simply dummy text of the printing and typesetting industry</h2>
                        </Col>
                    </Row>

                    <Row className="input-group">
                        <Col>
                            <Search
                                value={ this.state.search }
                                onChange={ this.setSearch }
                                rangeClass={ this.state.filter === 'range' ? this.state.rangeClass : '' }
                            />

                            {
                                this.state.filter === 'range' &&
                                <Search
                                    value={ this.state.searchRange }
                                    onChange={ this.setSearchRange }
                                    rangeClass={ this.state.filter === 'range' ? this.state.rangeClass : '' }
                                />
                            }

                            <Button onClick={ this.fetchData }>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Grid>

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

                <Footer/>
            </div>
        );
    }

    setSearch = (e) => {
        this.setState({search: e.target.value});
    };

    setSearchRange = (e) => {
        this.setState({searchRange: e.target.value});
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

            case 'year':
                this.fetchFilmByYear();
                break;

            case 'range':
                this.fetchFilmByRange();
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

    fetchFilmByYear = () => {
        fetch('http://localhost:8080/api/search/year/get?year=' + this.state.search, {method: 'GET',})
            .then(resp => resp.json())
            .then((res) => {
                this.setState({actors: [], films: res.filmDTOs});
            })
    };

    fetchFilmByRange = () => {
        fetch('http://localhost:8080/api/search/year/range?from=' + this.state.search + '&to=' + this.state.searchRange, {method: 'GET',})
            .then(resp => resp.json())
            .then((res) => {
                let films = [];
                res.map((item) => {
                    if (item.filmDTOs !== null) {
                        films = films.concat(item.filmDTOs)
                        console.log(item)
                    }

                })
                console.log(films)
                this.setState({actors: [], films: films});
            })
    };
}

export default App;
