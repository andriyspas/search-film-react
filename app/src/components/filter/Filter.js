import React, { Component } from 'react'
import { Select } from '../select/Select'

export class Filter extends Component {
  constructor (props) {
    super(props)

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
          value: 'name',
          name: 'Search by name'
        },
        {
          value: 'year',
          name: 'Search by year'
        }
      ],
      searchByYear: [
        {
          value: 'name',
          name: 'Search by year'
        },
        {
          value: 'year',
          name: 'Search by range'
        }
      ]
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
  }

  handleSearchType = (event) => {
    this.setState({selectedSearchType: event.target.value})
    this.props.onChange(this.state.selectedSearchType)
  }

  handleSearchBy = (event) => {
    this.setState({selectedSearchBy: event.target.value})
    this.props.onChange(this.state.selectedSearchBy)
  }

  handleSearchByYear = (event) => {
    this.setState({selectedSearchByYear: event.target.value})
    this.props.onChange(this.state.selectedSearchByYear)
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <h5 className="col-sm-4 m-b-md">Filters:</h5>
        </div>

        <div className="row">
          <Select
            onChange={this.handleSearchType}
            options={ this.generateOptions(this.state.searchType) }
          />

          {
            this.state.selectedSearchType === 'film' &&
            <Select
              onChange={this.handleSearchBy}
              options={ this.generateOptions(this.state.searchBy) }
            />
          }

          {
            this.state.selectedSearchType === 'film' && this.state.selectedSearchBy === 'year' &&
            <Select
              onChange={this.handleSearchByYear}
              options={ this.generateOptions(this.state.searchByYear) }
            />
          }
        </div>
      </div>
    )
  }
}
