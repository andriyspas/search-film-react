import React, { Component } from 'react'

export class Select extends Component {
  render () {
    return (
      <div className="col-sm-6 col-md-3">
        <select
          className="form-control"
          onChange={this.props.onChange}>
          { this.props.options }
        </select>
      </div>
    )
  }
}
