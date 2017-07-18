/**
 * Created by Stas on 18-Jul-17.
 */
import React, { Component } from 'react';

export class Film extends Component {

  constructor(props){
    super(props);

    this.state  = {
      film: props.film
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <img
              src={this.state.film.poster}/>
          </div>

          <div>
            <span>{ this.state.film.title }</span>
          </div>
        </div>
      </div>
    );
  }
}