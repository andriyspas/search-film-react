import React, { Component } from 'react'
import { Select } from '../select/Select'
import { Row, Col, Grid } from  'react-bootstrap';

export class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchType: [
                {
                    value: 'film',
                    name: 'Search films'
                },
                {
                    value: 'actor',
                    name: 'Search actors'
                }
            ],
            searchBy: [
                {
                    value: 'film',
                    name: 'Search by name'
                },
                {
                    value: 'year',
                    name: 'Search by year'
                }
            ],
            searchByYear: [
                {
                    value: 'year',
                    name: 'Search by year'
                },
                {
                    value: 'range',
                    name: 'Search by range'
                }
            ],
            selectedSearchType: 'film',
            selectedSearchBy: 'film',
            selectedSearchByYear: 'year'
        }
    }

    generateOptions = (arr) => {
        return arr.map((item) => {
            return (
                <option
                    key={ item.value }
                    value={ item.value }>
                    { item.name }
                </option>
            )
        })
    };

    handleSearchType = (event) => {
        this.setState({selectedSearchType: event.target.value}, () => {
            this.props.onChange(this.state.selectedSearchType);
        });
    };

    handleSearchBy = (event) => {
        this.setState({selectedSearchBy: event.target.value}, () => {
            this.props.onChange(this.state.selectedSearchBy);
        });
    };

    handleSearchByYear = (event) => {
        this.setState({selectedSearchByYear: event.target.value}, () => {
            this.props.onChange(this.state.selectedSearchByYear);
        });
    };

    render() {
        return (
            <Grid className="filter">
                <Row>
                    <Col sm={4}>Filters:</Col>
                </Row>

                <Row>
                    <Col sm={6} lg={3}>
                        <Select
                            onChange={ this.handleSearchType }
                            options={ this.generateOptions(this.state.searchType) }
                        />
                    </Col>

                    <Col sm={6} lg={3}>

                        {
                            this.state.selectedSearchType === 'film' &&
                            <Select
                                onChange={this.handleSearchBy}
                                options={ this.generateOptions(this.state.searchBy) }
                            />
                        }
                    </Col>

                    <Col sm={6} lg={3}>
                        {
                            this.state.selectedSearchType === 'film' && this.state.selectedSearchBy === 'year' &&
                            <Select
                                onChange={this.handleSearchByYear}
                                options={ this.generateOptions(this.state.searchByYear) }
                            />
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}
