/**
 * Created by Stas on 18-Jul-17.
 */
import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap'

export class Search extends Component {
  render() {
    return (
      <div>
        <FormControl type="text" value={this.props.value} onChange={this.props.onChange} />
      </div>
    );
  }
}
